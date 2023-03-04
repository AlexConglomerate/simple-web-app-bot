const express = require('express')
const router = express.Router({mergeParams: true})

router.use('/route1', require('./route1.routes'))

module.exports = router