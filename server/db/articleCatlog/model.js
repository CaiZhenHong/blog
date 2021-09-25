const mongoose = require('mongoose')

const AllDate = JSON.stringify(new Date()).replace('"','').split("T")
const date = AllDate[0]
const time = AllDate[0]

const articleCatlogSchema = new mongoose.Schema({
    preface:"number",
    title:"string",
    date:{type:String, default:`${date} ${time}`}
});

const articleCatlogrModel = mongoose.model('catlogaues', articleCatlogSchema);

module.exports = articleCatlogrModel
