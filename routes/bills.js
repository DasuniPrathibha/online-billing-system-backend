const router = require("express").Router();
let Bill = require("../models/Bill");


//Insert a bill
router.route("/add").post((req,res)=>{


    const billType = req.body.billType;
    const profile = req.body.profile;
    const accountNumber = req.body.accountNumber;
    const cardNumber = req.body.cardNumber;
    const amount = req.body.amount;
    
    const newBill = new Bill({

        billType,
        profile,
        accountNumber,
        cardNumber,
        amount,
        
    })

    newBill.save().then(()=>{
        res.json("Payment is succesfull")
    }).catch((err)=>{
        console.log(err);
    })

})


//View bill details
router.route("/view").get((req,res)=>{

    Bill.find().then((bills)=>{
        res.json(bills)
    }).catch((err)=>{
        console.log(err)
    })

})

//Filter data by ID
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Bill.findById(userId)
    .then((bill) => {
        res.status(200).send({status: "Bill is fetched", bill})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get bill", error: err.message});
    })
})

//////////////error///////////////
router.route("/get/:billType").get(async (req, res) => {
    let billTypeId = req.params.billType;
    const type = await Bill.findOne(billTypeId)
    .then((bill) => {
        res.status(200).send({status: "Bill is fetched", bill})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get bill", error: err.message});
    })
})

module.exports = router;