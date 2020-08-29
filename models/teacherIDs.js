const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    teacherID : String
})

module.exports = mongoose.model("TeacherID" , teacherSchema);