require("dotenv").config();
const express = require("express");
const app = express(); 
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {HoldingModel} = require("./model/HoldingModel")
const {PositionModel} = require("./model/PositionModel")
const PORT = process.env.PORT || 3000
const dburl = process.env.ATLASDB_URL
const authRoute = require("./Routes/AuthRoutes")
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // if you are using cookies/sessions
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



main()
.then(res =>{
    console.log('database connected successfully');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(dburl);
}

app.use("/", authRoute);

app.get("/holding", async (req, res)=>{
  let data = await HoldingModel.find();
  res.json(data);
})

app.get("/position", async (req, res)=>{
  let data = await PositionModel.find();
  res.json(data);
})



app.listen(PORT, ()=>{
    console.log("server is running");
})