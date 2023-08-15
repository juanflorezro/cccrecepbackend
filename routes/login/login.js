const express = require('express')
const router = express.Router()
const validationJWT = require('./../../methods/security/validationJWT')
const autenticationJWT = require('./../../methods/security/autenticationJWT')

router.post('/login', ( req, res) => {
  const user = req.body.user
  console.log(user)
  console.log(user)
  autenticationJWT(user)
  .then(doc => {
    console.log(doc.token)
    console.log(doc[1])
    console.log(doc)
    if(doc.token){
      console.log(doc.token)
      const token = doc.token
      const cedula = doc.usuario.usuario.cedula
      const nombre = doc.usuario.usuario.nombre
      const apellido = doc.usuario.usuario.apellido
      res.send({token,cedula,nombre,apellido})
    }else{
      res.send({token: false})
    }
    
    
  }).catch(err => console.log(err))
})

router.post('/autentication', (req, res) => {
  const token = req.headers['authorization']
  console.log(token)
  console.log('entrado')
  validationJWT(token)
  .then(doc => {
    console.log(doc)
    res.send(doc)
  })
  .catch(doc => {
    console.log(doc)
    res.send(doc)
  })
});

module.exports = router;