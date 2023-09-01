const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = {
  origin: 'https://cccrecep.juanflow04flore.repl.co', // Permite acceso solo desde este dominio
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  Access-Control-Allow-Origin: '*',
  Access-Control-Allow-Methods: '*',
  Access-Control-Allow-Headers: 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
}
const bodyParser = require('body-parser')
const loginUsuarioRouter = require('./routes/login/login')
const {main,storageSize} = require('./connection/connection')
const gestionUsuariosRouter = require('./routes/gestion/gestionUsuarios')
const gestionEntradasRouter = require('./routes/gestion/gestionEntradas')
const gestionObjetosRouter = require('./routes/gestion/gestionObjetos')
main().then(()=> storageSize().then(doc => console.log(doc)))

app.use(cors(corsOptions))
app.use(bodyParser())
app.use("/",loginUsuarioRouter)
app.use('/usuarios', gestionUsuariosRouter)
app.use('/entradas', gestionEntradasRouter)
app.use('/objetos', gestionObjetosRouter)
app.listen(3000, ()=>{
  console.log('El servidor esta corriendo por el puerto 3000')
  console.log('⭕ Cargando...')
})
module.exports = app
