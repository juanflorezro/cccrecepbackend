const express = require('express')
const router = express.Router()
const {
  agregarProyecto,
  obtenerProyecto,
  eliminarProyecto,
  agregarVisita,
  obtenerVisita,
  eliminarVisita,
  agregarContratista,
  obtenerContratista,
  eliminarContratista
} = require('./../../methods/arrys/gestionArrys')
const validationJWT = require('./../../methods/security/validationJWT')
router.post('/agregarProyecto', (req,res) => {
  const proyecto = req.body.proyecto
  const token = req.headers['authorization']
  validationJWT(token)
  .then(()=>{
    agregarProyecto(proyecto)
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
  })
  .catch((err) => res.status( 403 ).json({ msg: 'No autorizado', err }) )
})
router.post('/obtenerProyectos', (req,res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(()=>{
    obtenerProyecto()
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
  })
  .catch((err) => res.status( 403 ).json({ msg: 'No autorizado', err }) )
})
router.post('/eliminarProyecto', (req,res) => {
  const proyecto = req.body.proyecto
  const token = req.headers['authorization']
  validationJWT(token)
  .then(()=>{
    eliminarProyecto(proyecto)
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
  })
  .catch((err) => res.status( 403 ).json({ msg: 'No autorizado', err }) )
})
router.post('/agregarVisita', (req,res) => {
  const visita = req.body.visita
  const token = req.headers['authorization']
  validationJWT(token)
  .then(()=>{
    agregarVisita(visita)
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
  })
  .catch((err) => res.status( 403 ).json({ msg: 'No autorizado', err }) )
})
router.post('/obtenerVisita', (req,res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(()=>{
    obtenerVisita()
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
  })
  .catch((err) => res.status( 403 ).json({ msg: 'No autorizado', err }) )
})
router.post('/eliminarVisita', (req,res) => {
  const visita = req.body.visita
  const token = req.headers['authorization']
  validationJWT(token)
  .then(()=>{
    eliminarVisita(visita)
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
  })
  .catch((err) => res.status( 403 ).json({ msg: 'No autorizado', err }) )
})
router.post('/agregarContratista', (req,res) => {
  const contratista = req.body.contratista
  const token = req.headers['authorization']
  validationJWT(token)
  .then(()=>{
    agregarContratista(contratista)
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
  })
  .catch((err) => res.status( 403 ).json({ msg: 'No autorizado', err }) )
})
router.post('/obtenerContratista', (req,res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(()=>{
    obtenerContratista()
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
  })
  .catch((err) => res.status( 403 ).json({ msg: 'No autorizado', err }) )
})
router.post('/eliminarContratista', (req,res) => {
  const contratista = req.body.contratista
  const token = req.headers['authorization']
  validationJWT(token)
  .then(()=>{
    eliminarContratista(contratista)
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
  })
  .catch((err) => res.status( 403 ).json({ msg: 'No autorizado', err }) )
})

module.exports = router
