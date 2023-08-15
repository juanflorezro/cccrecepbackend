const {objeto} = require('./objetoModelo')

function agregar(objetoData) {
  return new Promise((resolve,reject) => {
    objeto(objetoData).save()
    .then(doc => {
      console.log('Guardado', doc)
      resolve(doc)
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
function obtener(objetoData){
  return new Promise((resolve,reject) => {
    if(objetoData){
      objeto.find(objetoData)
      .then(doc => {
        resolve(doc)
      })
      .catch( err => {
        reject(err)
      })
    }else{
      objeto.find()
      .then(doc => {
        resolve(doc)
      })
      .catch( err => {
        reject(err)
      })
    }
    
  })
}
function editar(objetoId,dataUpdateObjeto){
  option = {
    new: true,
    runValidator: true
  }
  return new Promise((resolve, reject) => {
    objeto.findOneAndUpdate(
      objetoId,
      dataUpdateObjeto,
      option
    )
    .then(doc => {
      resolve(doc)
    })
    .catch(err => {
      console.log(err +' file methods/gestionObjeto:53')
      reject(err)
    })
  })
}
function eliminar(objetoId){
  return new Promise((resolve, reject) => {
    objeto.findOneAndRemove(objetoId)
    .then(doc => {
      resolve(doc)
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
function eliminart(){
  return new Promise((resolve, reject) => {
    objeto.deleteMany({})
    .then(doc => {
      resolve(doc)
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
module.exports = {agregar,obtener,editar,eliminar,eliminart}