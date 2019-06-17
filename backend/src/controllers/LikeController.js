const Post = require('../models/Post')

module.exports = {
    async store(request, response) {
        const post = await Post.findById(request.params.post)

        post.likes += 1
        post.save()

        request.io.emit('like', post)

        return response.send(post)
    }
}