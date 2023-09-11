const mongoose = require('mongoose')
const proyectosSchema = new mongoose.Schema({
  proyecto: {
    type: String,
    required: true
  }
})
const proyectos = mongoose.model('Proyectos', proyectosSchema)
module.exports = {proyectos}
