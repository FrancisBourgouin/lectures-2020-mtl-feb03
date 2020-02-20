var express = require('express')
var router = express.Router()

router.get('/')
router.get('/:post_id')
router.get('/categories')
router.get('/categories/:category_id')
router.get('/categories/:category_id/')
router.get('/categories/:category_id/:post_id')

module.exports = router

