const {entradaSalida,entradaSalidaObjeto} = require('./entradaSalidaModelo')
function agregarEntradaSalida(entradaData){
  return new Promise((resolve,reject) => {
    entradaSalida(entradaData).save()
    .then(doc => resolve(doc))
    .catch(doc => reject(doc))
  })
}
function agregarEntradaSalidaObjeto(entradaData){
  return new Promise((resolve,reject) => {
    entradaSalidaObjeto(entradaData).save()
    .then(doc => resolve(doc))
    .catch(doc => reject(doc))
  })
}
function obtenerEntradaSalida(entradaData){
  return new Promise((resolve,reject) => {
    if(entradaData){
      entradaSalida.find(entradaData).populate({ path: 'objeto', populate: { path: 'usuario', model: 'Usuarios' } })
      .then(doc => resolve(doc))
      .catch(doc => reject(doc))
    }
    else{
      entradaSalida.find().populate({ path: 'objeto', populate: { path: 'usuario', model: 'Usuarios' } })
      .then(doc => resolve(doc))
      .catch(doc => reject(doc))
    }
  })
}
function obtenerEntradaSalidaObjeto(entradaData){
  return new Promise((resolve,reject) => {
    if(entradaData){
      entradaSalidaObjeto.find(entradaData ?? undefined).populate('objeto')
      .then(doc => resolve(doc))
      .catch(doc => reject(doc))
    }
    else{
      entradaSalidaObjeto.find().populate({ path: 'objeto' })
      .then(doc => resolve(doc))
      .catch(doc => reject(doc))
    }
  })
}
function editarPersona(personaEditar){
  option = { new: true, runValidator: true }
  return new Promise((resolve, reject) => {
    entradaSalida.findOneAndUpdate({_id: personaEditar._id}, personaEditar, option )
    .then(doc => resolve(doc))
    .catch(err => reject(err))
  })
}
function editarObjeto(objetoEditar){
  option = { new: true, runValidator: true }
  return new Promise((resolve, reject) => {
    entradaSalidaObjeto.findOneAndUpdate({ _id: objetoEditar._id}, objetoEditar, option )
    .then(doc => resolve(doc))
    .catch(err => reject(err))
  })
}
function eliminarEntradaPersona(entardaSalidaData){
  return new Promise((resolve,reject) => {
    entradaSalida.findOneAndRemove(entardaSalidaData)
    .then( doc => resolve(doc))
    .catch( err => reject(err))
  })
}
function eliminarEntradaObjeto(entardaSalidaData){
  return new Promise((resolve,reject) => {
    entradaSalidaObjeto.findOneAndRemove(entardaSalidaData)
    .then( doc => resolve(doc))
    .catch( err => reject(err))
  })
}
function eliminar() {
  return new Promise((resolve,reject) => {
    entradaSalidaObjeto.deleteMany({}) //con esto se eliminan todos los objetos
    .then( doc => resolve(doc))
    .catch( err => reject(err))
  })
}
module.exports = {
  agregarEntradaSalida,
  agregarEntradaSalidaObjeto,
  obtenerEntradaSalida,
  obtenerEntradaSalidaObjeto,
  editarPersona,
  editarObjeto,
  eliminarEntradaPersona,
  eliminarEntradaObjeto,
  eliminarEntradaObjeto,
  eliminar
}