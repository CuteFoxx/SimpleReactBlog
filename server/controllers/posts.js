const Post = require("../models/postModel");
const { post } = require("../routes/posts");

const getPosts = (req, res) => {
  if (req.params.id) {
    Post.find({ _id: req.params.id }, (err, post) => {
      if (err) {
        return;
      }
      res.status(200).json(post);
    });
    return;
  }
  Post.find({}, (err, posts) => {
    if (err) {
      res.send(err.message);
      return;
    }
    res.status(200).json(posts);
  });
};

const createPost = (req, res) => {
  new Post(req.body).save();
  res.status(200);
};

const deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.redirect("http://localhost:3000/");
      console.log(err);
    } else {
      res.status(202).redirect("http://localhost:3000/");
    }
  });
};

module.exports = { getPosts, createPost, deletePost };
