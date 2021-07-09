const axios = require('axios');

const Collection = require('../models/Collection.js');

const api = axios.create({
	baseURL: 'https://projeto-final-gustavo.herokuapp.com/',
});

module.exports = {
    async index(request, response) {
        const { page, pageSize, ...filters } = request.query;

        const pagination = {
            pageSize: Number(pageSize),
            skip: (Number(page) - 1) * Number(pageSize),
        };

        try {
            const collections = await Collection.find({ ...filters })
            .limit(pagination.pageSize)
            .skip(pagination.skip);
    
            return response.status(collections.length ? 200 : 204).json(collections);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async show(request, response) {
        const { 
            id,
        } = request.params;

        try {
            let collection = await Collection.findOne({ _id: id });

            if (!collection) {
                response.status(401)
                    .json({ error: 'Coleção não encontrada' });
            };

            const style = await api.get(`/style/${collection.styleId}`);

            if (!style) {
                response.status(401)
                    .json({ error: 'Estilo não encontrado' });
            };

            const {
                _id,
                nome,
                descricao,
                lancamento,
            } = collection;

            const collectionToShow = {
                _id,
                nome,
                descricao,
                lancamento,
                style: style.data,
            };

            return response.json(collectionToShow);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async create(request, response) {
        const { 
            nome,
            descricao,
            lancamento,
            styleId,
        } = request.body;

        try {
            const collection = await Collection.findOne({ nome });

            if (collection) {
                response.status(409)
                .json({ error: 'Coleção, com o nome informado, já cadastrada!' })
            };

            const newCollection = await Collection.create({
                nome,
                descricao,
                lancamento,
                styleId,
            });

            return response.json(newCollection);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async update(request, response) {
        const { id } = request.params;
        const {
            nome,
            descricao,
            lancamento,
            styleId,
        } = request.body;

        try {
            const collection = await Collection.findOne({ _id: id });

            if (!collection) {
                response.status(401)
                .json({ error: 'Coleção não encontrada' });
            };
    
            await collection.updateOne({
                nome,
                descricao,
                lancamento,
                styleId,
            });
    
            const modifiedCollection = await Collection.findOne({ _id: id });
    
            return response.json(modifiedCollection);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async delete(request, response) {
        const { 
            id,
        } = request.params;

        try {
            const collection = await Collection.findOne({ _id: id });

            if (!collection) {
                response.status(401)
                .json({ error: 'Coleção não encontrada' });
            };
            
            await collection.delete();
    
            return response.json({ message: 'Coleção deletada com sucesso!' });
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
};

