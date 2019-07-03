let mongoose = require('mongoose')
let Schema = mongoose.Schema

var PostsSchema = new Schema({
    title: String,
    author: String
}) 

module.exports = mongoose.model('Post', PostsSchema)