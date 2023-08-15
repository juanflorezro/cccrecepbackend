const jwt = require('jsonwebtoken')
const { obtenerRecepcionista } = require('../usuarios/gestionUsuarios')
function autenticationJWT(user){
  return new Promise( (resolve,reject) => {
    obtenerRecepcionista()
    .then( doc => { 
      console.log(doc)
      let encontrado = false
      for( let x = 0 ; x < doc.length ; x++ ){
        if(doc[x].usuario.user === user.user && doc[x].usuario.password === user.password){
          encontrado = true
          console.log('prueba de nivel')
          userautentication = {
            user: doc[x].usuario.user,
            password: doc[x].usuario.password
          }
          if(userautentication.cedula === '' || userautentication.correo === ''){
            console.log('vacio')
        
          }else{
            const usuario = doc[x]
            
            const token = jwt.sign(userautentication, 'elbotas', {expiresIn: '480m'})
            resolve({token, usuario})
          }
          console.log(encontrado, 'jhqduy', x)
        }
        console.log(encontrado, 'jhqduy 2')
        
    }
      if(!encontrado){
          console.log(encontrado, 'jhqduy 3')
          resolve(false)
        }
      }
      )
    .catch(err =>{
      console.log('usuario no esta en el sistema')
      console.log(err)
      reject(false)
    })
  })
 
  
}
module.exports = autenticationJWT