const mongoose = require('mongoose')
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  edad: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    lowercase: true
  },
  tcedula: {
    type: String,
    required: true
  },
  cedula: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  }
})

const administradorSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuarios',
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
})
 

const recepcionistaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuarios',
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  }
})

const visitanteSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true
  },
  empresa: {
    type: String,
    required: true
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuarios',
    required: true
  },
  recepcionista: {
    type: String,
    required: true
  }
})

const usuario = mongoose.model('Usuarios', usuarioSchema)
const administrador = mongoose.model('Administrador', administradorSchema)
const recepcionista = mongoose.model('Recepcionista', recepcionistaSchema)
const visitante = mongoose.model('Visitante', visitanteSchema)

module.exports = {usuario,administrador,recepcionista,visitante}

