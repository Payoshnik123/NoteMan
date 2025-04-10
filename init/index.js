const mongoose = require("mongoose");
const initData = require("./data.js");
const Note = require("../models/notes");

const MONGO_URL = "mongodb://127.0.0.1:27017/noteman";

main().then((res)=>{
    console.log("connection successful");
})
.catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
    await Note.deleteMany({});
    await Note.insertMany(initData.data);
    console.log("data was initialized");
};
initDB();
