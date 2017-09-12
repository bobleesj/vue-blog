const express = require('express');
const authController = require('../controllers/auth-controller');
const router = express.Router();

router.get('/test', authController.get_blog_thumbnails);

module.exports = router;
