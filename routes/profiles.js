const router = require("express").Router();
let ServiceProfile = require("../models/serviceprofile");

//add Service Profile

router.route("/addprofile").post((req,res)=>{


    const selectCatergory = req.body.selectCatergory;
    const profileName = req.body.profileName;
    const accountNumber = req.body.accountNumber;
    const address = req.body.address;
    const customerName = req.body.customerName;
    const contactNumber =req.body.contactNumber;
    const currencyType =req.body.currencyType;

    
    const newServiceProfile = new ServiceProfile({
        selectCatergory,
        profileName,
        accountNumber,
        address,
        customerName,
        contactNumber,
        currencyType
        
    })

    newServiceProfile.save().then(()=>{
        res.json("Service profile succesfully added.")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/viewprofiles").get((req,res)=>{

    ServiceProfile.find().then((profiles)=>{
        res.json(profiles)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/getprofile/:id").get(async (req, res) => {
    let profileId = req.params.id;
    const profile = await ServiceProfile.findById(profileId)
    .then((profile) => {
        res.status(200).send({status: "Profile is fetched", profile})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching", error: err.message});
    })
})

//Update service profile.

router.route("/updateprofile/:id").put(async (req, res) => {
    let profileId = req.params.id;
    const {selectCatergory, profileName, accountNumber, address, customerName, contactNumber,currencyType} = req.body;

    const updateProfile = {
        selectCatergory,
        profileName,
        accountNumber,
        address,
        customerName,
        contactNumber,
        currencyType,
        
    }

    const update = await ServiceProfile.findByIdAndUpdate(profileId, updateProfile)
    .then(() => {
        res.status(200).send({status: "Profile details are updated succesfully"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating profile", error: err.message});
    })
})

router.route("/deleteprofile/:id").delete(async (req,res) => {
    let profileId = req.params.id;

    await ServiceProfile.findByIdAndDelete(profileId)
    .then(() => {
        res.status(200).send({status: "Service Profile is removed succesfully"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with removing profile", error: err.message});
    })
})



module.exports = router;