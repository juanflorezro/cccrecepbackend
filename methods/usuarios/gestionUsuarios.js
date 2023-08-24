const {usuario,administrador,recepcionista,visitante} = require('./usuarioModelo')
const {entradaSalida} = require('../entradas/entradaSalidaModelo')

function agregarAdministrador(usuarioData, administradorData){
  return new Promise((resolve, reject) => {
    usuario(usuarioData).save()
    .then(doc => {
      administradorData.usuario = doc
      administrador(administradorData).save()
      resolve(doc)
    }).catch(err => reject(err))
  })
}
function agregarRecepcionista(usuarioData, RecepcionistaData){
  return new Promise((resolve, reject) => {
    usuario(usuarioData).save()
    .then(doc => {
      console.log(doc.usuario)
      RecepcionistaData.usuario = doc  
      recepcionista(RecepcionistaData).save()
      resolve(doc)
    }).catch(err => reject(err))
  })
}
function agregarVisitante(usuarioData, visitanteData){
  return new Promise((resolve, reject) => {
    const usuarioNew = usuario(usuarioData)
    usuarioNew.save()
    .then(doc => {
      visitanteData.usuario = doc
      visitante(visitanteData).save()
      resolve(doc)
    }).catch(err => reject(err))
  })
}
function obtenerAdministrador(adminstradorData){
  return new Promise((resolve, reject) => {
    if(adminstradorData){
      administrador.find(adminstradorData).populate('usuario').then(doc => resolve(doc)).catch(err => reject(err))
    }else{
      administrador.find().populate('usuario').then( doc => resolve(doc)).catch(err => reject(err)) 
    }
  })
}
function obtenerRecepcionista(recepcionistaData){
  return new Promise((resolve, reject) => {
    if(recepcionistaData){
      recepcionista.find(recepcionistaData).populate('usuario').then(doc => resolve(doc)).catch(err => reject(err)) 
    }else{
      recepcionista.find().populate('usuario').then( doc => resolve(doc)).catch(err => reject(err)) 
    }
  })
}
function obtenerVisitante(visitanteData){
  return new Promise((resolve, reject) => {
    if(visitanteData){
      visitante.find(visitanteData).populate('usuario').then( doc => resolve(doc)).catch(err => reject(err)) 
    }else{
      visitante.find().populate('usuario').then( doc => resolve(doc)).catch(err => reject(err)) 
    }
  })
}
function obtenerVisitanteFiltro(usuarioId){
  return new Promise((resolve, reject) => {
    console.log(usuarioId)
    usuario.find(usuarioId)
    .then(doc => {
      if(doc){ visitante.find({usuario: doc}).populate('usuario').then( doc => resolve(doc)).catch(err => reject(err)) }
    })
    .catch(err => reject(err))  
  })
}
function editarusuario(usuarioId, datosUpdateUsuario, datosUpdateVisitante){
  option = {
    new: true,
    runValidator: true
  }
  return new Promise((resolve,reject) => {
    usuario.findOneAndUpdate(
      usuarioId,
      datosUpdateUsuario,
      option
    )
    .then(doc => {
      const usuario = {
        usuario: doc._id
      }
      visitante.findOneAndUpdate(
        usuario,
        datosUpdateVisitante,
        option
      )
      .then( doc => {
        resolve(doc)
      })
      .catch(err => {
        console.log.error(err)
        reject(err)
      }) 
    })
    .catch(err => {
      console.log(err+' file /methods/gestionUsuarios:260')
      reject(err)
    })
  })
}

//editar ejemplo
function editar() {
  usuarioActual = {
    cedula: '1234567890'
  }
  usuarioUpdate = {
    correo: 'juan10florez10@gmail.com'
  }
  option = {
    new: true,
    runValidator: true
  }
  return new Promise((resolve, reject) => {
    usuarioModel.findOneAndUpdate(
      usuarioActual,
      usuarioUpdate,
      option
    ).then( doc => {
      resolve(doc)
    }).catch(err => {
      console.error(err)
      reject(err)
    })
  })
}



//editar administrador
function editarAdministrador(administradorData,administradorUpdateData){
  
  return new Promise((resolve,reject) => {
    
    option = {
      new: true,
      runValidator: true
    }  
    
    administrador.findOneAndUpdate(administradorData,administradorUpdateData,option)
    .then( doc => {
      resolve(doc)
    }).catch(err => {
      console.error(err)
      reject(err)
    })
    
  })
  
}



//editar Recepconista
function editarRecepcionista(recepcionistaData,recepcionistaUpdateData){
  
  return new Promise((resolve,reject) => {

    option = {
      new: true,
      runValidator: true
    }  
    
    recepcionista.findOneAndUpdate(recepcionistaData,recepcionistaUpdateData,option)
    .then( doc => {
      resolve(doc)
    }).catch(err => {
      console.error(err)
      reject(err)
    })
    
  })
  
}



//editar Visiante
function editarVisitante(visitanteData,visitanteUpdateData){
  
  return new Promise((resolve,reject) => {

     option = {
      new: true,
      runValidator: true
    }  
    
    visitante.findOneAndUpdate(visitanteData,visitanteUpdateData,option)
    .then( doc => {
      resolve(doc)
    }).catch(err => {
      console.error(err)
      reject(err)
    })
    
  })
  
}

function eliminarUsuario(usuarioData){
  return new Promise((resolve,reject) => {
    entradaSalida.deleteMany({objeto: usuarioData})
    .then(() => {
      visitante.deleteMany({usuario: usuarioData.usuario})
      .then((e)=>{
        usuario.findOneAndRemove(usuarioData.usuario).then((e) => resolve(e))
      })
    })
    .catch(err => console.log(err)) 
  })
}

//En esta funcion se eliminan todos los usuarios
function eliminar(UsuarioData) {
  
  return new Promise((resolve,reject) => {
    
   administrador.deleteMany({}) //con esto se eliminan todos los usuarios
    //usuarioMode.findOneAndRemove(usuarioData)
    .then( doc => {
        resolve(doc)
    }).catch( err => {
      console.err(err)
      reject(err)
    })
    
    usuario.deleteMany({}) //con esto se eliminan todos los usuarios
    //usuarioMode.findOneAndRemove(usuarioData)
    .then( doc => {
        resolve(doc)
    }).catch( err => {
      console.err(err)
      reject(err)
    })
    
    recepcionista.deleteMany({}) //con esto se eliminan todos los usuarios
    //usuarioMode.findOneAndRemove(usuarioData)
    .then( doc => {
        resolve(doc)
    }).catch( err => {
      console.err(err)
      reject(err)
    })
    
    visitante.deleteMany({}) //con esto se eliminan todos los usuarios
    //usuarioMode.findOneAndRemove(usuarioData)
    .then( doc => {
      
      resolve(doc)
      
    }).catch( err => {
      
      console.err(err)
      reject(err)
      
    })
  })
}



//Estas son las Funciones Eliminar <<<<<<<<< Eliminar>>>>>>>>>>



//eliminar Administrador
function eliminarAdministrador(administardorData){
  
  return new Promesa((resolve,reject) => {
    
    administrador.findOneAndRemove(administardorData)
    .then( doc => {
      resolve(doc)
    }).catch( err => {
      console.err(err)
      reject(err)
    })
    
  })
  
}



//eliminar Recepcionista
function eliminarRecepcionista(recepcionistaData){
  
  return new Promesa((resolve,reject) => {
    
    recepcionista.findOneAndRemove(recepcionistaData)
    .then( doc => {
      resolve(doc)
    })
    .catch( err => {
      console.err(err)
      reject(err)
    })
    
  })
  
}



//eliminar Visitante
function eliminarVisitante(visitanteData){
  return new Promesa((resolve,reject) => {
    visitante.findOneAndRemove(visitanteData)
    .then( doc => {
      resolve(doc)
    })
    .catch( err => {
      console.err(err)
      reject(err)
    })
  })
}






//exportar las formulas para usarlos en los modelos 

module.exports = {
  agregarAdministrador,
  agregarRecepcionista,
  agregarVisitante,
  obtenerAdministrador,
  obtenerRecepcionista,
  obtenerVisitante,
  obtenerVisitanteFiltro,
  editarAdministrador,
  editarRecepcionista,
  editarVisitante,
  editarusuario,
  eliminarAdministrador,
  eliminarRecepcionista,
  eliminarVisitante,
  eliminarUsuario,
  eliminar
}

