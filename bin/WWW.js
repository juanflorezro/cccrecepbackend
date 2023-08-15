var app = require('../index')
const http = require('http')

var server = http.createServer(app)
server.listen(3000,()=>{console.log('pspsps')})