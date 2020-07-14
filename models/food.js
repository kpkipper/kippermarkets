const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    price: {
        type: String
    },
    picture: {
        type: String
    },
    qty: {
        type: Number
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    }
});

module.exports = mongoose.model('food',schema);

