const express = require('express')
const jwt = require('jsonwebtoken')
const validationJWT = require('./../../methods/security/validationJWT')
const autenticationJWT = require('./../../methods/security/autenticationJWT')
const router = express.Router()
const {editarusuario,agregarAdministrador,agregarRecepcionista,agregarVisitante,obtenerAdministrador,obtenerRecepcionista,obtenerVisitante,obtenerVisitanteFiltro,eliminarUsuario,editar,eliminar} = require('./../../methods/usuarios/gestionUsuarios')

router.get('/agregarAdministrador',( req , res ) => {
  const usuarioData = {
    nombre: 'Juan David',
    apellido: 'Florez Rodriguez',
    edad: '21',
    telefono: '3003331333',
    correo: 'juan10florez10@gmai.com',
    tcedula: 'cedula',
    cedula: '1002442323',
    user: 'admin',
    password: 'root',
    estado: 'activo'
  }//req.body.usuario
  administradorData = {
    usuario: {},
    tipo: 'Gestion'
  }
  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    agregarAdministrador( usuarioData , administradorData )
    .then( docc => {
      console.log(docc)
    })
  })
  .catch( err => {
    console.log( err )
    agregarAdministrador( usuarioData , administradorData )
    .then( docc => {
      console.log(docc)
    })
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.get('/agregarRecepcionista',( req , res ) => {
  const usuarioData = {
    nombre: 'Juan David',
    apellido: 'Florez Rodriguez',
    edad: '21',
    telefono: '3003331333',
    correo: 'juan10florez10@gmail.com',
    tcedula: 'cedula',
    cedula: '1002442323',
    user: 'juan10florez10@gmail.com',
    password: '1002442323',
    estado: 'activo'
  }//req.body.usuario
  recepcionistaData = {
    usuario: {},
    ubicacion: 'Ronda'
  }
  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    agregarRecepcionista( usuarioData , recepcionistaData )
    .then( docc => {
      console.log(docc)
    })
  })
  .catch( err => {
    console.log( err )
    agregarRecepcionista( usuarioData , recepcionistaData )
    .then( docc => {
      console.log(docc)
    })
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.post('/agregarvisitante',( req , res ) => {
  const usuario = req.body.personaData
  const usuarioData = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    edad: usuario.edad,
    telefono: usuario.telefono,
    correo: usuario.correo,
    tcedula: usuario.tcedula,
    cedula: usuario.cedula,
    user: 'x',
    password: 'x',
    estado: 'x'
  }//req.body.usuario
  visitanteData = {
    tipo: usuario.tipo,
    empresa: usuario.empresa,
    usuario: {},
    recepcionista: usuario.recepcionista
  }
  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    agregarVisitante( usuarioData , visitanteData )
    .then( docc => {
      console.log(docc)
      res.send(docc)
    })
  })
  .catch( err => {
    console.log( err )
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.post('/eliminarUsuario', (req,res) => {
  const usuarioId = req.body.usuarioIdc

  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    eliminarUsuario(usuarioId)
    .then(doc => {
      res.send({doc})
    })
    .catch(err => {
      res.status( 403 ).json({ err })
    })
  })
  .catch( err => {
    console.log( err )
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.post('/editarVisitante', (req,res) => {
  const usuarioId = req.body.usuarioId
  const datosUpdateUsuario = req.body.datosUpdateUsuario
  const datosUpdateVisitante = req.body.datosUpdateVisitante
  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    editarusuario(usuarioId, datosUpdateUsuario, datosUpdateVisitante)
    .then(doc => {
      res.send(doc)
    })
    .catch(err => {
      console.log(err+' file /routes/gestionUsuarios:136')
      res.status( 403 ).json({ err })
    })
  })
  .catch( err => {
    console.log(err+' file /routes/gestionUsuarios:141' )
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.get('/listaAdministrador', (req,res) => {
  obtenerAdministrador(false)
  .then((doc)=>{ 
    console.log('Usuarios')
    console.log(doc)
    res.send('Usuarios\n'+doc + '✅✅')
  })
  
})
router.get('/listaRecepcionista', (req,res) => {
  obtenerRecepcionista(false)
  .then((doc)=>{ 
    console.log('Usuarios')
    console.log(doc)
    res.send('Usuarios\n'+doc + '✅✅')
  })
  
})
router.post('/listaVisitante', (req,res) => {
  const filtroUnico = req.body.filtroUnico
  obtenerVisitante(filtroUnico)
  .then((doc)=>{ 
    console.log('Usuarios')
    console.log(doc)
    res.send(doc)
  })
  
})
router.post('/listaVisitanteid', (req,res) => {
  const filtroUnico = req.body.usuarioIdo
  obtenerVisitanteFiltro(filtroUnico)
  .then((doc)=>{ 
    console.log('Usuarios')
    console.log(doc)
    res.send(doc)
  })
  
})

module.exports = router