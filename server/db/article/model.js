const mongoose = require('mongoose')

const AllDate = JSON.stringify(new Date()).replace('"','').split("T")
const date = AllDate[0]
const time = AllDate[0]

const articleSchema = new mongoose.Schema({
    liked: {type:Boolean, default:false}, 
    like_count: {type:Number, default:0}, 
    comment_count: {type:Number, default:0},
    tag: {type:String},
    title: {type:String},
    content:{type:String},
    cover: {type:String},
    date:{type:String, default:`${date} ${time}`},
    summarize:{type:String}
   });

const articleModel = mongoose.model('articles', articleSchema);

module.exports = articleModel
