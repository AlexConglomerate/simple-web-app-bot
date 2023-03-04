const express = require('express')
const router = express.Router({mergeParams: true})
// const User = require(`../models/User`)


router.post('/update', async (req, res) => {
    try {
        console.log(`update`)
        res.send(qwe)
    } catch (error) {
        console.log(`error`, error)
    }
})


module.exports = router
