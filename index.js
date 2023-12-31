const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const loginUsuarioRouter = require('./routes/login/login')
const {main,storageSize} = require('./connection/connection')
const gestionUsuariosRouter = require('./routes/gestion/gestionUsuarios')
const gestionEntradasRouter = require('./routes/gestion/gestionEntradas')
const gestionObjetosRouter = require('./routes/gestion/gestionObjetos')
const gestionArrysRouter = require('./routes/gestion/gestionArrys')
main()//.then(()=> storageSize().then(doc => console.log(doc)))

app.use(cors({origin: '*'}))
app.use(bodyParser())
app.use("/",loginUsuarioRouter)
app.use('/usuarios', gestionUsuariosRouter)
app.use('/entradas', gestionEntradasRouter)
app.use('/objetos', gestionObjetosRouter)
app.use('/arrys', gestionArrysRouter)
app.listen(3000, ()=>{
  console.log('El servidor esta corriendo por el puerto 3000')
  console.log('⭕ Cargando...')
})
module.exports = app
