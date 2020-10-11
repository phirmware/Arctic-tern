const router =  require('express').Router()

const template = require('./template')

module.exports = router

router.get(
    '/',
    template.renderHome
)

router.get(
    '/about',
    template.renderHome
)

router.get(
    '/faq',
    template.renderHome
)

router.get(
    'legal',
    template.renderHome
)
