const PagesController = require('./controllers/PagesController')
module.exports = (app) => {

    app.route('/')
    .get(PagesController.getHomePage)

    app.route('/posts')
    .get(PagesController.getPosts)

    app.route('/contact')
    .get(PagesController.getContactPage)
    // .post(PagesController.postContactForm)

    app.route('*')
    .get((req, res) => {
        res.send('404 Not Found')
    })
}