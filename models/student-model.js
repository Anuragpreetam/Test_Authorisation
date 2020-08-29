const mongoose = require('mongoose')
// const roles = require("./roles-model")

const Schema = mongoose.Schema;

const Student_Schema = new Schema({
    name : String,
    id : String,
    roles : String
})

module.exports = mongoose.model("studentBase" , Student_Schema)

