const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  
//let productSchema = new Schema({
    password: { type: String, required: true ,unique: true, max:100},
    email: { type:  String , required: true, max: 100}
    //_id: mongoose.Schema.Types.ObjectId
}); 

module.exports = mongoose.model('ChatApp', ProductSchema);