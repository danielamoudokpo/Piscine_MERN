// var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema ({
    login : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
    },
    password : {
        type : String,
        required: true,
    },
    type : {
        type: Boolean,
        default: false,
    }
});




module.exports = User = mongoose.model('user',userSchema)