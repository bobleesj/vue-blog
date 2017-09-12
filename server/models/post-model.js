var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = new Schema({
  title: { type: String },
  subtitle: { type: String },
  "tags": Array,
  "datePublished": Date,
  "dateModified": Date,
  "markdown": { type: String  },
  "author": String,
  "userId": { type: Number },
  "postUrl": { type: String },
  "postId": String,
  "_id": Schema.Types.ObjectId
});

postSchema.statics.findFivePosts = function() {
  return this.find().limit(5);
}

postSchema.statics.findAllPosts = function() {
  return this.find();
}

postSchema.statics.findPostWithId = function(postId, callback) {
  this.findOne({ '_id': postId },  (err, post) => {
    callback(post);
  });
}

postSchema.statics.findPostWithUrl = function(postUrl, callback) {
  this.findOne({ 'postUrl': postUrl },  (err, post) => {
    callback(post);
  });
}

module.exports = mongoose.model('Post', postSchema);


// const Post = require('../models/post-model');
// exports.get_five_thumbnails = (req, res, next) => {
//   Post.findFivePosts().then((posts) => {
//     console.log('working bro');
//     res.render('body/index', {
//       posts: posts
//     });
//   });
// }
