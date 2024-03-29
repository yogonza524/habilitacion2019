const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const UserSchema = new Schema({

    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    rol:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    pass:{
        type:String,
        required: true,
    }

});

module.exports = User = mongoose.model('users', UserSchema);