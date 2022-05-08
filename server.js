const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const cardRouter = require("./routes/cards.js");
const billRouter = require("./routes/bills.js");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
    console.log("Mongodb connection is successfull!");
})

app.use("/bill", billRouter);
app.use("/card", cardRouter);

//date
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
console.log(formatted);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})