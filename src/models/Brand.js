const mongoose = require('mongoose')

const BrandSchema = new mongoose.Schema({
    nome: String,
    pais: String,
    surgimento: Number,
    sobre: String,
}, { timestamp: true })

module.exports = mongoose.model('Brand', BrandSchema)