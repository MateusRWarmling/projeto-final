const Brand = require('../models/Brand.js');

module.exports = {
    async index(request, response) {
        const { page, pageSize, ...filters } = request.query;

        const pagination = {
            pageSize: Number(pageSize),
            skip: (Number(page) - 1) * Number(pageSize),
        };

        const brands = await Brand.find({ ...filters })
        .limit(pagination.pageSize)
        .skip(pagination.skip);

        return response.status(brands.length ? 200 : 204).json(brands);
    },

    async show(request, response) {
        const { 
            id,
        } = request.params;

       try {
            const brand = await Brand.findOne({ _id: id });

            if (!brand) {
                response.status(401)
                    .json({ error: 'Marca não encontrada' });
            };

            return response.json(brand);
       } catch (error) {
            return response.status(400).json({ error });
       }
    },

    async create(request, response) {
        const { 
            nome,
            pais,
            surgimento,
            sobre,
        } = request.body;

        try {
            const brand = await Brand.findOne({ nome });

            if (brand) {
                response.status(409)
                .json({ error: 'Marca, com o nome informado, já cadastrada!' })
            };

            const newBrand = await Brand.create({
                nome,
                pais,
                surgimento,
                sobre,
            });

            return response.json(newBrand);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async update(request, response) {
        const { id } = request.params;
        const {            
            nome,
            pais,
            surgimento,
            sobre,
        } = request.body;

        try {
            const brand = await Brand.findOne({ _id: id });

            if (!brand) {
                response.status(401)
                .json({ error: 'Marca não encontrada' });
            };
    
            await brand.updateOne({            
                nome,
                pais,
                surgimento,
                sobre,
            });

            const modifiedBrand = await Brand.findOne({ _id: id });
    
            return response.json(modifiedBrand);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async delete(request, response) {
        const { 
            id,
        } = request.params;

        try {
            const brand = await Brand.findOne({ _id: id });

            if (!brand) {
                response.status(401)
                .json({ error: 'Marca não encontrada' });
            };
            
            await brand.delete();
    
            return response.json({ message: 'Marca deletada com sucesso!' });
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
};

