const mongoose = require('mongoose');
//long
const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
