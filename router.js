let express = require('express')
let controller = require('./controller')
let router = new express.Router()

router.get("/", controller.getAll)

module.exports = router