const mongoose = require('mongoose');
const {base}= require('../../config/dev.config')
const {userName,password,port,host,sqlName} = require('../../config/dev.config').db
const userModel = require('./users/model')

module.exports = function(){
   mongoose.connect(`mongodb://${userName}:${password}@${host}:${port}/${sqlName}`)
    const con = mongoose.connection;
    con.on('error', console.error.bind(console, '连接数据库失败'));
    con.once('open',()=>{
        userModel.find({userName}, (err, docs) => {
            if(err || docs.length) return
            userModel.create({userName:base.userName,password:base.password}, (err,candies) => {
                if(err) return
                console.log('账户初始成功！');
            })
        })
    })
}
