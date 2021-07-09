const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    lancamento: String,
    styleId: String,
}, { timestamp: true })

module.exports = mongoose.model('Collection', CollectionSchema)