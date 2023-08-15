const jwt = require('jsonwebtoken')
function validationJWT(token){
  return new Promise(( resolve , reject ) => {
    console.log('⭕ cargando...')
    jwt.verify(token, 'elbotas', function(error, user){
      if (error) {
       reject(false) 
        console.log(error)
      } else {
        resolve(true)
      }
    })
  })
}

module.exports = validationJWT