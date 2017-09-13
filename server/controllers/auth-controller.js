const user = require('../models/user')

exports.get_blog_thumbnails = (req, res, next) => {
  var nick = new User({
    name: 'Bob Lee',
    password: '123123',
    admin: true
  })

  nick.save(function(err) {
    if (err) throw err

    console.log('User saved');
    res.send('Blog thumbnail working')    
  })

}
