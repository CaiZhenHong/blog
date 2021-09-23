const mongoose = require('mongoose');
const {userName,password,port,host,sqlName} = require('../../config/dev.config').db

module.exports = function(){
   mongoose.connect(`mongodb://${userName}:${password}@${host}:${port}/${sqlName}`)
    const con = mongoose.connection;
    con.on('error', console.error.bind(console, '连接数据库失败'));
    con.once('open',()=>{
    })
}
