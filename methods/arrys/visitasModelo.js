const mongoose = require('mongoose')
const visitasSchema = new mongoose.Schema({
  visita: {
    type: String,
    required: true
  }
})
const visitas = mongoose.model('Visitas', visitasSchema)
module.exports = {visitas}