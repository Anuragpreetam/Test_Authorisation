const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sidSchema = new Schema({
    studentID : String
})

module.exports = mongoose.model("StudentID" , sidSchema);