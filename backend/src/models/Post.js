const mongoose = require('mongoose')
const connection = require('../config/connection')

mongoose.connect(connection.connection, connection.params)

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', PostSchema)