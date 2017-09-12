// Import npm modules
const express = require('express')
const authController = require('../controllers/auth-controller')
const router = express.Router()


// Inject controllers
router.get('/test', authController.get_blog_thumbnails)

// Export router
module.exports = router
