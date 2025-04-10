const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const infoSchema = new Schema({
    title:String,
    description:String,
    image:String,
});

const Info = mongoose.model("Info",infoSchema);
module.exports = Info;