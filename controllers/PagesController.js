const PostsModel = require('../models/posts')

exports.getHomePage = (req, res) => {
    res.status(400).json({'hello': 'world'})
}

exports.getPosts = (req, res) => {
    PostsModel.find({}, (err, data)=>{
        if(err){return res.status(500).json({error: true})}
        return res.json(data);
    })
}

exports.getContactPage = (req, res) => {
    res.send('Contact Page')
}  