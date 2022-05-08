const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({

    selectCatergory :{
        type: String,
        required: true
    },
    profileName:{
        type: String,
        required: true
    },
    accountNumber:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    customerName:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true
    },
    currencyType:{
        type: String,
        required: true
    }
})

const ServiceProfile = mongoose.model("ServiceProfile",profileSchema);

module.exports = ServiceProfile;