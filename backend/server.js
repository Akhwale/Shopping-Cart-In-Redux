const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const productRouter = require("./routes/product.js");
app.use("/product", productRouter); 

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

 mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(()=>{console.log("You are connected to the database successfully")});



app.listen(port,()=>{console.log("You are connected to port 5000")});