const express = require('express')
const { get } = require('lodash')
const PostController = require('../controllers/PostController')
const LikeController = require('../controllers/LikeController')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const routes = new express.Router()
const upload = multer(uploadConfig)

routes.get('/', (request, response) => {
    const name = get(request, 'query.name', 'World')

    return response.send(`Hello ${name}`)
})

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)
routes.post('/posts/:post/like', LikeController.store)

module.exports = routes