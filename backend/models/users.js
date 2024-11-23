const mongoose = require('mongoose');

const schema = new mongoose({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
    

},{
    timestamps: true
});

module.exports = mongoose.model('users',schema);