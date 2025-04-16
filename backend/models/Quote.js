const { text } = require('express');
const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    author:{
        type: String,
        required: true,
        trim: true
    },
    text:{
        type: String,
        required: true,
        trim: true
    }
});

const Quote = mongoose.model('Quote', Schema);
module.exports = Quote;