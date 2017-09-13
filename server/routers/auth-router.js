// Import modules
const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth-controller')

// Inject controllers
router.get('/login', authController.get_blog_thumbnails)

// Export router
module.exports = router
