const path = require('path')

const STATIC_PATH = (path) => `static/${path}`
const VIEWS_PATH = () => path.join(__dirname, './public/views')

module.exports = (app, express) => {
    app.set('views', VIEWS_PATH())
    app.set('view engine', 'ejs')
    app.use(express.static(STATIC_PATH('public')))
}