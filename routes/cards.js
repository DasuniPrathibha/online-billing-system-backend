const router = require("express").Router();
let Card = require("../models/Card");


// Insert card details
router.route("/insert").post((req,res)=>{


    const cardType = req.body.cardType;
    const cardHolderName = req.body.cardHolderName;
    const cardNumber = req.body.cardNumber;
    const expirationDate = req.body.expirationDate;
    const securitycode = req.body.securitycode;
    //date
    const dateTime = req.body.dateTime;

    const newCard = new Card({
        
        cardType,
        cardHolderName,
        cardNumber,
        expirationDate,
        securitycode,
        //date
        dateTime

    })

    newCard.save().then(()=>{
        res.json("Payment method is added succesfully")
    }).catch((err)=>{
        console.log(err);
    })

})

//View card details
router.route("/").get((req,res)=>{

    Card.find().then((cards)=>{
        res.json(cards)
    }).catch((err)=>{
        console.log(err)
    })

})

//Update card details
router.route("/update/:id").put(async (req, res) => {
    let CardId = req.params.id;
    const {cardType, cardHolderName, cardNumber, expirationDate, securitycode} = req.body;

    const updateCard = {
        cardType,
        cardHolderName,
        cardNumber,
        expirationDate,
        securitycode
    }

    const update = await Card.findByIdAndUpdate(CardId, updateCard)
    .then(() => {
        res.status(200).send({status: "Card details are updated succesfully"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//Delete payment method
router.route("/delete/:id").delete(async (req,res) => {
    let CardId = req.params.id;

    await Card.findByIdAndDelete(CardId)
    .then(() => {
        res.status(200).send({status: "Payment method is removed"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete card", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    
    let CardId = req.params.id;
    console.log(CardId);
    const card = await Card.findById(CardId)
    .then((card) => {
        res.status(200).send(card);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get card", error: err.message});

    })
})


module.exports = router;