const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({

    cardType :{
        type: String,
        required: true
    },
    cardHolderName:{
        type: String,
        required: true
    },
    cardNumber:{
        type: String,
        required: true
    },
    expirationDate:{
        type: String,
        required: true
    },
    securitycode:{
        type: String,
        required: true
    }
})

const Card = mongoose.model("Card",cardSchema);

module.exports = Card;