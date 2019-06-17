const express = require('express')
const routes = require('./routes')
const path = require('path')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use((request, response, next) => {
    request.io = io

    next()
})

app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
app.use(routes)

server.listen(3333)
