const {objeto} = require('./objetoModelo')
const {entradaSalidaObjeto} = require('./entradaSalidaModelo')

function agregar(objetoData) {
  return new Promise((resolve,reject) => {
    objeto(objetoData).save().then(doc => resolve(doc)).catch(err => reject(err))
  })
}
function obtener(objetoData){
  return new Promise((resolve,reject) => {
    if(objetoData){
      objeto.find(objetoData).then(doc => resolve(doc)).catch( err => reject(err))
    }else{
      objeto.find().then(doc => resolve(doc)).catch( err => reject(err))
    } 
  })
}
function editar(objetoId,dataUpdateObjeto){
  option = { new: true, runValidator: true }
  return new Promise((resolve, reject) => {
    objeto.findOneAndUpdate( objetoId, dataUpdateObjeto, option ).then(doc => resolve(doc)).catch(err => reject(err))
  })
}
function eliminar(objetoData){
  return new Promise((resolve, reject) => {
    entradaSalidaObjeto.deleteMany({objeto: objetoData})
    .then((e) => { objeto.findOneAndRemove(objetoData).then(doc => resolve(doc)).catch(err => reject(err)) })
    .catch(err => reject(err))
  })
}
function eliminart(){
  return new Promise((resolve, reject) => {
    objeto.deleteMany({}).then(doc => resolve(doc)).catch(err => reject(err))
  })
}
module.exports = {agregar,obtener,editar,eliminar,eliminart}