const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const billSchema = new Schema({

   billType :{
      type: String,
      required: true
  },
    profile :{
        type: String,
        required: true
    },
    accountNumber:{
       type: Number,
          required: true
    },
    cardNumber : {
       type : Number,
       required: true
    },
    amount : {
       type : Number,
       required: true
    },
    
   //  dateTime : {
   //      type : Date,
   //      required: true
   //  }


} , 

   {
      timestamps: true,
      createdAt: true,
      updatedAt: false,
   }
   

   //  const Bill = sequelize.define(
   //    "Bill",
   //    { billType: Sequelize.STRING },
   //    { profile: Sequelize.STRING },
   //    { accountNumber: Sequelize.STRING },
   //    { cardNumber: Sequelize.STRING },
   //    { amount: Sequelize.STRING },
   //    { 
   //      timestamps: true,
   //      createdAt: false, // don't add createdAt attribute
   //      updatedAt: true,
   //    }
    
    

)

const Bill = mongoose.model("Bill",billSchema);

module.exports = Bill;