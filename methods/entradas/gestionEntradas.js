const {entradaSalida,entradaSalidaObjeto} = require('./entradaSalidaModelo')
//Estas son las Funciones <<<<<<<<<<<<< agregar  >>>>>>>>>>>>>>
//agregar entrada perosna
function agregarEntradaSalida(entradaData){
  return new Promise((resolve,reject) => {
    entradaSalida(entradaData)
    .save()
    .then(doc => {
      console.log(doc)
      resolve(doc)
    })
    .catch(doc => {
      console.log(doc)
      reject(doc)
    })
  })
}
//agregar entrada Objeto
function agregarEntradaSalidaObjeto(entradaData){
  return new Promise((resolve,reject) => {
    entradaSalidaObjeto(entradaData)
    .save()
    .then(doc => {
      console.log(doc)
      resolve(doc)
    })
    .catch(doc => {
      console.log(doc)
      reject(doc)
    })
  })
}
//Estas funciones son para <<<<<<<<<<<<obtener>>>>>>>>>>>>>>>>>
//obtener entrada Visitante
function obtenerEntradaSalida(entradaData){
  return new Promise((resolve,reject) => {
    if(entradaData){
      entradaSalida.find(entradaData).populate('objeto')
      .then(doc => {
        resolve(doc)
      })
      .catch(doc => {
        reject(doc)
      })
    }
    else{
      entradaSalida.find().populate({
        path: 'objeto',
        populate: {
          path: 'usuario',
          model: 'Usuarios'
        }
      })
      .then(doc => {
        resolve(doc)
      })
      .catch(doc => {
        reject(doc)
      })
    }
  })
}
function obtenerEntradaSalidaObjeto(entradaData){
  return new Promise((resolve,reject) => {
    if(entradaData){
      entradaSalidaObjeto.find(entradaData ?? undefined).populate('objeto')
      .then(doc => {
        resolve(doc)
      })
      .catch(doc => {
        reject(doc)
      })
    }
    else{
      entradaSalidaObjeto.find().populate({
        path: 'objeto'
      })
      .then(doc => {
        resolve(doc)
      })
      .catch(doc => {
        reject(doc)
      })
    }
  })
}

function eliminar() {
  
  return new Promise((resolve,reject) => {
    
    entradaSalidaObjeto.deleteMany({}) //con esto se eliminan todos los usuarios
    //usuarioMode.findOneAndRemove(usuarioData)
    .then( doc => {
          resolve(doc)
    }).catch( err => {
      console.err(err)
      reject(err)
    })
  
  })
}
module.exports = {
  agregarEntradaSalida,
  agregarEntradaSalidaObjeto,
  obtenerEntradaSalida,
  obtenerEntradaSalidaObjeto,
  eliminar
}