const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    liked: {type:Boolean, default:false}, 
    like_count: {type:Number, default:0}, 
    comment_count: {type:Number, default:0},
    tag: {type:String},
    title: {type:String},
    content:{type:String},
    cover: {type:String},
    date: {type:String,default:new Date().getTime()},
   });

const articleModel = mongoose.model('articles', articleSchema);

module.exports = articleModel
