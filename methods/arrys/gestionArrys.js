const {proyectos} = require('./proyectosModelo')
const {visitas} = require('./visitasModelo')
const {contratistas} = require('./contratistasModelo')

function agregarProyecto(proyecto) {
  return new Promise((resolve,reject) =>{
    proyectos(proyecto).save()
    .then((doc) => resolve(doc))
    .catch((err) => reject(err))
  })
}
function obtenerProyecto() {
  return new Promise((resolve,reject) =>{
    proyectos.find()
    .then((doc) => resolve(doc))
    .catch((err) => reject(err))
  })
}
function eliminarProyecto(proyecto) {
  return new Promise((resolve,reject) =>{
    proyectos.findOneAndRemove(proyecto)
    .then((doc) => resolve(doc))
    .catch((err) => reject(err))
  })
}
function agregarVisita(visita) {
  return new Promise((resolve,reject) => {
    visitas(visita).save()
    .then(doc => resolve(doc))
    .catch(err => reject(err))
  })
}
function obtenerVisita() {
  return new Promise((resolve,reject) => {
    visitas.find()
    .then(doc => resolve(doc))
    .catch(err => reject(err))
  })
}
function eliminarVisita(visita) {
  return new Promise((resolve,reject) => {
    visitas.findOneAndRemove(visita)
    .then(doc => resolve(doc))
    .catch(err => reject(err))
  })
}
function agregarContratista(contratista) {
  return new Promise((resolve,reject) => {
    contratistas(contratista).save()
    .then(doc => resolve(doc))
    .catch(err => reject(err))
  })
}
function obtenerContratista() {
  return new Promise((resolve,reject) => {
    contratistas.find()
    .then(doc => resolve(doc))
    .catch(err => reject(err))
  })
}
function eliminarContratista(contratista) {
  return new Promise((resolve,reject) => {
 contratistas.findOneAndRemove(contratista)
    .then(doc => resolve(doc))
    .catch(err => reject(err))
  })
}
module.exports = {
  agregarProyecto,
  obtenerProyecto,
  eliminarProyecto,
  agregarVisita,
  obtenerVisita,
  eliminarVisita,
  agregarContratista,
  obtenerContratista,
  eliminarContratista
}