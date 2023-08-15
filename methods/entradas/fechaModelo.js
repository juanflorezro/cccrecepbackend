const mongoose = require('mongoose')
const fechaSchema = new mongoose.Schema({
  dia: {
    type: String,
    required: true
  },
  mes: {
    type: String,
    required: true
  },
  año: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  }
})

const fecha = mongoose.model('Fecha', fechaSchema)
module.exports = {fecha}