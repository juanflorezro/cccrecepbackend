const mongoose = require('mongoose')
const entradaSalidaPersonaSchema = new mongoose.Schema({
  recepcionista: {
    type: String,
    required: true
  },
  objeto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Visitante',
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  tobjeto: {
    type: String,
    required: true
  }
})
const entradaSalidaObjetoSchema = new mongoose.Schema({
  recepcionista: {
    type: String,
    required: true
  },
  objeto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Objeto',
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  tobjeto: {
    type: String,
    required: true
  }
})
const entradaSalida = mongoose.model('Entrada', entradaSalidaPersonaSchema)
const entradaSalidaObjeto = mongoose.model('EntradaObjeto', entradaSalidaObjetoSchema)
module.exports = {entradaSalida,entradaSalidaObjeto}