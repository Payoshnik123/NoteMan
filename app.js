const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Note = require("./models/notes.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/noteman";

async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then((res)=>{
    console.log("connection successful");
})
 .catch((err) =>{
    console.log(err);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.engine('ejs',ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("Hii! I am root.");
});

//Index Route
app.get("/notes/index",async(req,res)=>{
    const allNotes = await Note.find({});
    res.render("notes/index.ejs",{allNotes});
});

//Login Route
app.get("/users/login",(req,res)=>{
    res.render("users/login.ejs");
});
  
//Signup Route
app.get("/users/signup",(req,res)=>{
    res.render("users/signup.ejs");
});

app.listen(8080,()=>{
    console.log("connection successfull");
});