const router = require("express").Router();
let Expense = require("../models/expense");


// Insert bill details
router.route("/insert").post((req,res)=>{


    const serviceCategory = req.body.serviceCategory;
    const profileId = req.body.profileId;
    const profileName = req.body.profileName;
    const accountNumber = req.body.accountNumber;
    const customerName = req.body.customerName;
    const units = req.body.units;
    const taxes = req.body.taxes;
    const billAmount = req.body.billAmount;
    const frmDate = req.body.frmDate;
    const frmMonth = req.body.frmMonth;
    const frmYear = req.body.frmYear;
    const toDate = req.body.toDate;
    const toMonth = req.body.toMonth;
    const toYear = req.body.toYear;
    //date
    //const dateTime = req.body.dateTime;

    const newExpense = new Expense({
        
        serviceCategory,
        profileId,
        profileName,
        accountNumber,
        customerName,
        units,
        taxes,
        billAmount,
        frmDate,
        frmMonth,
        frmYear,
        toDate,
        toMonth,
        toYear,

        //date
        //dateTime

    })

    newExpense.save().then(()=>{
        res.json("Bill is added succesfully")
    }).catch((err)=>{
        console.log(err);
    })

})

//View bill details
router.route("/").get((req,res)=>{

    Expense.find().then((expenses)=>{
        res.json(expenses)
    }).catch((err)=>{
        console.log(err)
    })

})

//Update bill details
router.route("/update/:id").put(async (req, res) => {
    let ExpenseId = req.params.id;
    const {serviceCategory, profileId, profileName, accountNumber, customerName, units, taxes, billAmount, frmDate, frmMonth, frmYear, toDate, toMonth, toYear } = req.body;

    const updateExpense = {
        serviceCategory,
        profileId,
        profileName,
        accountNumber,
        customerName,
        units,
        taxes,
        billAmount,
        frmDate,
        frmMonth,
        frmYear,
        toDate,
        toMonth,
        toYear

    }

    const update = await Expense.findByIdAndUpdate(ExpenseId, updateExpense)
    .then(() => {
        res.status(200).send({status: "Bill details are updated succesfully"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//Delete payment method
router.route("/delete/:id").delete(async (req,res) => {
    let ExpenseId = req.params.id;

    await Expense.findByIdAndDelete(ExpenseId)
    .then(() => {
        res.status(200).send({status: "Bill is removed"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting bill", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let ExpenseId = req.params.id;
    const expense = await Expense.findById(ExpenseId)
    .then((expense) => {
        res.status(200).send({status: "Bill fetched", expense});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get bill", error: err.message});

    })
})


module.exports = router;