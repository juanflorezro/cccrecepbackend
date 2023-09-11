const mongoose = require('mongoose')
const contratistasSchema = new mongoose.Schema({
  contratista: {
    type: String,
    required: true
  }
})
const contratistas = mongoose.model('Contratistas', contratistasSchema)
module.exports = {contratistas}