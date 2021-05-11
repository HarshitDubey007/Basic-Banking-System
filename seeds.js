const mongoose = require("mongoose");
const Account = require("./model/account");

mongoose.connect("mongodb://localhost:27017/bank-system", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("error", err);
    })

const db = async () => {
    await Account.deleteMany({});
    await Account.insertMany([
        {
        name:"Ayush",
        bankName:"punjab national bank",
        accountType:"seaving",
        accountNumber:961600080001,
        branch:"kokata",
        contactNumber:79057826788,
        email:"ayush@gmail.com",
        city:"kolka",
        address:"2115696",
        balance:2124
        },
        {
        name:"Smith",
        bankName:"State bank of india",
        accountType:"fixed",
        accountNumber:961600080002,
        branch:"kokata",
        contactNumber:79057826788,
        email:"brain@gmail.com",
        city:"kolka",
        address:"2333313",
        balance:1310
        },
        {
        name:"Nistha Tripathi",
        bankName:"punjab national bank",
        accountType:"seaving",
        accountNumber:961600080003,
        branch:"Rambagh",
        contactNumber:7007068661,
        email:"nisthatripathi@gmail.com",
        city:"PRAYAGRAJ (ALLAHABAD)",
        address:"2/8 ADA COLONY",
        balance:4000
        },
        {
        name:"kavya",
        bankName:"State bank of india",
        accountType:"fixed",
        accountNumber:961600080004,
        branch:"assam",
        contactNumber:5768385847,
        email:"kavyasingh",
        city:"PRAYAGRAJ",
        address:"SHANKARGARH",
        balance:4010
        },
        {
        name:"kavya Tripathi",
        bankName:"State bank of india",
        accountType:"current",
        accountNumber:961600080005,
        branch:"Rambagh",
        contactNumber:7007068661,
        email:"kavyasingh",
        city:"PRAYAGRAJ",
        address:"SHANKARGARH",
        balance:3000
        },
        {
        name:"Brain",
        bankName:"BOB",
        accountType:"current",
        accountNumber:961600080006,
        branch:"sisoda",
        contactNumber:5768385847,
        email:"ayush@gmail.com",
        city:" ",
        address:" ",
        balance:4000
        },
        {
        name:"Vibhushan Kumar",
        bankName:"village bank",
        accountType:"salary",
        accountNumber:961600096007,
        branch:"kadipur",
        contactNumber:7007068991,
        email:"vibhushan@kumargmail.com",
        city:"sultanpur",
        address:"sultanpur kadipur",
        balance:500
        },
        {
        name:"Uzmaa Kamalu",
        bankName:"village bank",
        accountType:"seaving",
        accountNumber:961600080009,
        branch:"Anand Vihar",
        contactNumber:565678900,
        email:"uzma@gmail.com",
        city:"Delhi",
        address:"Anand Vihar Delhi",
        balance:1700,
        },
        {
        name:"Bittu Mishra Dubey",
        bankName:"village bank",
        accountType:"current",
        accountNumber:961600080015,
        branch:"Semri Bazar",
        contactNumber:7007868991,
        email:"bittu@gmail.com",
        city:"sultanpur",
        address:"Semri Bazar Sutanpur",
        balance:11600
        },
        {
        name:"Arohi Jeswal",
        bankName:"village bank",
        accountType:"fixed",
        accountNumber:961600080029,
        branch:"Kidganj",
        contactNumber:7007063491,
        email:"arohi@gmail.com",
        city :"Prayagraj",
        address:"Kidganj prayagraj 211003",
        balance:10
        }
    ]);
};

db();