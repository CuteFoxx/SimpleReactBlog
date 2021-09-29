const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        required: true,
        type: String,
    },
    postBody: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    },
    author:{
        name: String,
        img: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;