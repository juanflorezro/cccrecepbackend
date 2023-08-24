const mongoose = require('mongoose');
let db 
let stats
let statsu
async function main() {
    
  await mongoose.connect('mongodb+srv://carlos:04120128Juan*@yudaju.llbtopr.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('Te has conectado sarisfactoriamente a una a a base de datos la direccion actual es 0.0.0.0 que da acceso a todas partes, pornerla privada poner la de aplicacion en replit que es 34.74.9.99 \nConnected ✅')).catch(err => console.log('\nfailed ❌'))
  db = mongoose.connection.db;
  stats = await db.stats()
  statsu = await db.collection('entradas').stats()
}
async function storageSize(){
  // Obtiene el tamaño total de almacenamiento
  console.log('Tamaño total de almacenamiento:', stats, 'bytes', statsu, 'usurios' )
  return stats.storageSize
}
module.exports = {main,storageSize}
