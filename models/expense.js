const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({

    serviceCategory :{
        type: String,
        required: true
    },
    profileId:{
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
    customerName:{
        type: String,
        required: true
    },
    units:{
        type: String,
        required: true
    },
    taxes:{
        type: String,
        required: false
    },
    billAmount:{
        type: String,
        required: true
    },
    frmDate:{
        type: String,
        required: true
    },
    frmMonth:{
        type: String,
        required: true
    },
    frmYear:{
        type: String,
        required: true
    },
    toDate:{
        type: String,
        required: true
    },
    toMonth:{
        type: String,
        required: true
    },
    toYear:{
        type: String,
        required: true
    },
})

const Expense = mongoose.model("Expense",expenseSchema);

module.exports = Expense;