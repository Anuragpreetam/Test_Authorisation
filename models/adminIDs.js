const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    adminID : String
})

module.exports = mongoose.model("AdminID" , adminSchema);