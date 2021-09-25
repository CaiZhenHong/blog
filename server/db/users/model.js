const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    userName: String, 
    password: String,
    name: {type:String,default:'MyBlog'},
    job: {type:String,default:'前端开发工程师'},
    address: {type:String,default:'广东-深圳'},
    links:{type:[{name:String,url:String}]}
   });

const userModel = mongoose.model('users', schema);

module.exports = userModel
