const express = require('express')
const router = express.Router()
const validationJWT = require('./../../methods/security/validationJWT')
const {
  agregarEntradaSalida,
  agregarEntradaSalidaObjeto,
  obtenerEntradaSalida,
  obtenerEntradaSalidaObjeto,
  eliminar
} = require('./../../methods/entradas/gestionEntradas')


router.post('/agregarEntradaPersona',(req,res) => {
  const entradaObjetoData = req.body.objeto
  const token = req.headers['authorization']
  console.log(entradaObjetoData)
  validationJWT(token)
  .then(doc => {
    agregarEntradaSalida(entradaObjetoData)
    .then(doc => {
      console.log(doc)
      res.send(doc) 
    })
    .catch(err => {
      console.log(err)
    })
  })
  .catch(err => {
    console.log(err)
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.post('/agregarEntradaObjeto',(req,res) => {
  const entradaObjetoData = req.body.objeto
  const token = req.headers['authorization']
  console.log(entradaObjetoData)
  validationJWT(token)
  .then(doc => {
    agregarEntradaSalidaObjeto(entradaObjetoData)
    .then(doc => {
      console.log(doc)
      res.send(doc) 
    })
    .catch(err => {
      console.log(err)
    })
  })
  .catch(err => {
    console.log(err)
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.post('/obtenerEntradaSalidaPersona',(req,res) => {
  
  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    obtenerEntradaSalida('')
    .then(doc => {
      console.log(doc)
      
      res.send(doc)
    })
    .catch(err => {
      console.log(err)
    })
  })
  .catch(err => {
    console.log(err)
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.post('/obtenerEntradaSalidaObjeto',(req,res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    obtenerEntradaSalidaObjeto('')
    .then(doc => {
      console.log(doc)
      
      res.send(doc)
    })
    .catch(err => {
      console.log(err)
    })
  })
  .catch(err => {
    console.log(err)
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.get('/eliminar', (req,res) => {
  eliminar()
  .then(doc => {
    
    res.send({doc})
    
  })
})
router.post('/obtenerEntradaSalidaPersonaUnica',(req,res) => {
  const {fecha, usuarioId} = req.body
  obtenerEntradaSalida('')
    .then(doc => {
      console.log(doc)
      let contenedor = []
      if(fecha.dia){
        for(let x = 0; x < doc.length; x++){
          const año = doc[x].fecha.slice(0, 4)
          const mes = doc[x].fecha.slice(5, 7)
          const dia = doc[x].fecha.slice(8, 10)
          console.log(año+mes+dia+' '+fecha.año+fecha.mes+fecha.dia)
          if(fecha.año === año && fecha.mes === mes && fecha.dia === dia){
            console.log(usuarioId.cedula)
            if(usuarioId.cedula){
              console.log(doc[x].objeto.usuario.cedula)
              if(usuarioId.cedula === doc[x].objeto.usuario.cedula){
                contenedor.push(doc[x])
              }
                
            }else{
              console.log('entrando2')
              contenedor.push(doc[x])
            }
            console.log('entrando')
          }
        }
      }else{
        if(fecha.mes){
            for(let x = 0; x < doc.length; x++){
              const año = doc[x].fecha.slice(0, 4)
              const mes = doc[x].fecha.slice(5, 7)
              if(fecha.año === año && fecha.mes === mes){
                if(usuarioId.cedula){
                  if(usuarioId.cedula === doc[x].objeto.usuario.cedula){
                    contenedor.push(doc[x])
                  }
                }else{
                  contenedor.push(doc[x])
                }
                
              }   
            }
        }else{
          if(fecha.año){
            for(let x = 0; x < doc.length; x++){
              const año = doc[x].fecha.slice(0, 4)
              if(fecha.año === año){
                if(usuarioId.cedula){
                  if(usuarioId.cedula === doc[x].objeto.usuario.cedula){
                    contenedor.push(doc[x])
                  }
                }else{
                  contenedor.push(doc[x])
                }
                
              }   
            }
          }else{
            if(usuarioId.cedula){
              for(let x = 0 ; x < doc.length ; x++){
                if(usuarioId.cedula){
                  if(usuarioId.cedula === doc[x].objeto.usuario.cedula){
                    contenedor.push(doc[x])
                  }
                }
              }
            }
          }
        }
      }
      
      res.send(contenedor)
    })
    .catch(err => {
      console.log(err)
    })
})
router.post('/obtenerEntradaSalidaObjetoUnico',(req,res) => {
  const fecha = req.body.fecha
  const objetoId = req.body.objetoId
  obtenerEntradaSalidaObjeto('')
    .then(doc => {
      console.log(doc)
      let contenedor = []
      if(fecha.dia){
        for(let x = 0; x < doc.length; x++){
          const año = doc[x].fecha.slice(0, 4)
          const mes = doc[x].fecha.slice(5, 7)
          const dia = doc[x].fecha.slice(8, 10)
          console.log(año+mes+dia+' '+fecha.año+fecha.mes+fecha.dia)
          if(fecha.año === año && fecha.mes === mes && fecha.dia === dia){
            console.log(objetoId.activo)
            if(objetoId.activo){
              console.log(doc[x].objeto.activo)
              if(objetoId.activo === doc[x].objeto.activo){
                contenedor.push(doc[x])
              }
                
            }else{
              console.log('entrando2')
              contenedor.push(doc[x])
            }
            console.log('entrando')
          }
        }
      }else{
        if(fecha.mes){
            for(let x = 0; x < doc.length; x++){
              const año = doc[x].fecha.slice(0, 4)
              const mes = doc[x].fecha.slice(5, 7)
              if(fecha.año === año && fecha.mes === mes){
                if(objetoId.activo){
                  if(objetoId.activo === doc[x].objeto.activo){
                    contenedor.push(doc[x])
                  }
                }else{
                  contenedor.push(doc[x])
                }
                
              }   
            }
        }else{
          if(fecha.año){
            for(let x = 0; x < doc.length; x++){
              const año = doc[x].fecha.slice(0, 4)
              if(fecha.año === año){
                if(objetoId.activo){
                  if(objetoId.activo === doc[x].objeto.activo){
                    contenedor.push(doc[x])
                  }
                }else{
                  contenedor.push(doc[x])
                }
                
              }   
            }
          }else{
            if(objetoId.activo){
              for(let x = 0 ; x < doc.length ; x++){
                if(objetoId.activo){
                  if(objetoId.activo === doc[x].objeto.activo){
                    contenedor.push(doc[x])
                  }
                }
              }
            }
          }
        }
      }
      
      res.send(contenedor)
    })
    .catch(err => {
      console.log(err)
    })
})
module.exports = router