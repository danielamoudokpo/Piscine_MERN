const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var billetSchema = new Schema ({
    owner : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required: true,
    },
    content : {
        type : String,
        required: true,
    },

});


module.exports = Billet = mongoose.model('billet',billetSchema)