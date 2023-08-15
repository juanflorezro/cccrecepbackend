const mongoose = require('mongoose');
async function main() {
    
  await mongoose.connect('mongodb+srv://carlos:04120128Juan*@yudaju.llbtopr.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('Te has conectado sarisfactoriamente a una a a base de datos la direccion actual es 0.0.0.0 que da acceso a todas partes, pornerla privada poner la de aplicacion en replit que es 34.74.9.99 \nConnected ✅')).catch(err => console.log('\nfailed ❌'))
}

module.exports = main
