const mongoose = require('mongoose')
const objetoSchema = new mongoose.Schema({
  serial: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  activo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  recepcionista: {
    type: String,
    required: true
  }
})

const objeto = mongoose.model('Objeto', objetoSchema)
module.exports = {objeto}