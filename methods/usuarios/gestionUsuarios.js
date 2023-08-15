  const {usuario,administrador,recepcionista,visitante} = require('./usuarioModelo')

//acciones administrador



//Estas son las funciones e <<<<<<<  agregar  >>>>>>>>

//agregar Admin
function agregarAdministrador(usuarioData, administradorData){
  return new Promise((resolve, reject) => {
    usuario(usuarioData).save()
    .then(doc => {
      console.log(doc.usuario)
      administradorData.usuario = doc
      administrador(administradorData).save()
      .then(docc => {
        console.log(docc)
      })
      resolve(doc)
    })
    .catch(err => {
      console.error(err)
      reject(err)
    });
  });
}



//agregar Recepcionista
function agregarRecepcionista(usuarioData, RecepcionistaData){
  return new Promise((resolve, reject) => {
    usuario(usuarioData).save()
    .then(doc => {
      console.log(doc.usuario)
      RecepcionistaData.usuario = doc  
      recepcionista(RecepcionistaData).save()
      .then(docc => {
        console.log(docc)
      })
      resolve(doc)
    })
    .catch(err => {
      console.error(err)
      reject(err)
    });
  });
}



//agrgar Visitante
function agregarVisitante(usuarioData, visitanteData){
  return new Promise((resolve, reject) => {
    const usuarioNew = usuario(usuarioData)
    usuarioNew.save()
    .then(doc => {
      console.log(doc.usuario)
      visitanteData.usuario = doc
      visitante(visitanteData).save()
      .then(docc => {
        console.log(docc)
      })
      resolve(doc)
    })
    .catch(err => {
      console.error(err)
      reject(err)
    })
  })
}






//Estas son las funciones de <<<<<<<<< obtener >>>>>>>>>




//obtener administrador
function obtenerAdministrador(adminstradorData){
  return new Promise((resolve, reject) => {
    if(adminstradorData){
      administrador.find(adminstradorData).populate('usuario')
      .then( doc => {
        resolve(doc)
      })
      .catch(err => {
        console.log.error(err)
        reject(err)
      })
    }else{
      administrador.find().populate('usuario')
      .then( doc => {
        resolve(doc)
      })
      .catch(err => {
        console.log.error(err)
        reject(err)
      }) 
    }
  })
}



//obtener Recepcionista
function obtenerRecepcionista(recepcionistaData){
  return new Promise((resolve, reject) => {
    if(recepcionistaData){
      recepcionista.find(recepcionistaData).populate('usuario')
      .then( doc => {
      resolve(doc)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      }) 
    }else{
      recepcionista.find().populate('usuario')
      .then( doc => {
        resolve(doc)
      })
      .catch(err => {
        console.log.error(err)
        reject(err)
      }) 
    }
  })
}



//otenerVisitantes
function obtenerVisitante(visitanteData){
  return new Promise((resolve, reject) => {
    if(visitanteData){
      visitante.find(visitanteData).populate('usuario')
      .then( doc => {
        resolve(doc)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      }) 
    }else{
      visitante.find().populate('usuario')
      .then( doc => {
        resolve(doc)
      })
      .catch(err => {
        console.log.error(err)
        reject(err)
      }) 
    }
  })
}
function obtenerVisitanteFiltro(usuarioId){
  return new Promise((resolve, reject) => {
    console.log(usuarioId)
    usuario.find(usuarioId)
    .then(doc => {
      console.log(doc)
      if(doc){
        visitante.find({usuario: doc}).populate('usuario')
        .then( doc => {
          console.log(doc)
          resolve(doc)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        }) 
      }
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
    
  })
}






//Estas son las funciones de <<<<<<<<<< Editar >>>>>>>>>>>> 



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






//Estas son las funciones de eliminar

function eliminarUsuario(usuarioId){
  return new Promise((resolve,reject) => {
    usuario.find(usuarioId)
    .then(doc => {
      visitante.findOneAndRemove({usuario: doc})
      .then(doc => {
        console.log('usuario eliminado', doc)
        usuario.findOneAndRemove(usuarioId)
        .then( doc => {
            console.log('usuario eliminado', doc)
            resolve(doc)
         })
        .catch( err => {
          console.err(err + 'file /methods/gestionUsuario:400')
          reject(err)
        })
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
    .catch( err => {
      console.log(err)
       reject(err)
    })
    
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

