const express = require('express')
const router = express.Router()
const validationJWT = require('./../../methods/security/validationJWT')
const {agregar,obtener,editar,eliminar,eliminart} = require('./../../methods/entradas/gestionObjeto')

router.post('/agregar', (req,res) => {
  const token = req.headers['authorization']
  console.log(token+' v '+req.body.objetoData)
  validationJWT(token)
  .then(doc => {
    console.log(doc)
    agregar(req.body.objetoData)
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
router.post('/lista', (req,res) => {
  const filtroUnico = req.body.filtroUnico
  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    console.log(doc)
    obtener(filtroUnico)
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
router.post('/editar', (req,res) => {
  const objetoId = req.body.objetoId
  const dataUpdateObjetos = req.body.objetoData
  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    editar(objetoId,dataUpdateObjetos)
    .then(doc => {
      res.send(doc)
    })
    .catch(err => {
      console.log(err)
      res.status( 403 ).json({ err })
    })
    
  })
  .catch(err => {
    console.log(err)
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.post('/eliminar', (req,res) => {
  const objeto = req.body.objeto
  const token = req.headers['authorization']
  validationJWT(token)
  .then(doc => {
    eliminar(objeto)
    .then(doc => {
      res.send(doc)
    })
    .catch(err => {
      console.log(err)
      res.status( 403 ).json({ err })
    })
    
  })
  .catch(err => {
    console.log(err)
    res.status( 403 ).json({ msg: 'No autorizado' })
  })
})
router.get('/eliminart', (req,res) => {
  eliminart()
    .then(doc => {
      res.send(doc)
    })
    .catch(err => {
      console.log(err)
      res.status( 403 ).json({ err })
    })
})
module.exports = router