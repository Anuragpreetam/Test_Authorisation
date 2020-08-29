const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const student = require("./models/student-model");
const sID = require("./models/studentIDs");
const tID = require("./models/teacherIDs");
const aID = require("./models/adminIDs");
const roles = require("./models/roles-model")
app.set("view-engine" , "ejs");
app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json()) 

mongoose.connect("mongodb://localhost/Test_authorisation" , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } , (req , res)=>{
    console.log("Connected to Database")
})

app.get("/", (req, res) => console.log("home"));

app.get("/user", (req, res) =>{
    res.render("info-form.ejs")
});

app.post("/submitted" , (req , res)=>{
    student.findOne({id : req.body.userId}).then((currentUser)=>{
        if(currentUser){ 
            console.log("have a look....");
            console.log("CurrentUser :" + currentUser);
            console.log(typeof currentUser.roles);
            console.log(currentUser.roles);
            if(roles.Student.rolename == currentUser.roles){ //or if(currentUser.roles == "Student")
            res.render("profile.ejs" , {info : currentUser});
            }
            else{
                if(roles.Teacher.rolename == currentUser.roles){ //or if(currentUser.roles == "Student")
                res.render("teacherprofile.ejs" , {info : currentUser});
                }else{
                    if(roles.Admin.rolename == currentUser.roles){ //or if(currentUser.roles == "Student")
                    res.render("adminprofile.ejs" , {info : currentUser});
                    }
                }
            }
        }
            
        else{
            new student({
                name : req.body.userName,
                id : req.body.userId,
                roles : req.body.userRole
            }).save().then((Userdata)=>{console.log("User Saved..")
            if(Userdata.roles === "Student"){
                new sID({
                    studentID: req.body.userId
                }).save().then((req, res) => console.log("added to studentids")) 
            } else{
                if(Userdata.roles === "Teacher"){
                    new tID({
                        teacherID: req.body.userId
                    }).save().then((req, res) => console.log("added to teacherids"))
            }else{
                if(Userdata.roles === "Admin"){
                    new aID({
                        adminID: req.body.userId
                    }).save().then((req, res) => console.log("added to adminids"))
            }
            }  }})
        } 
    })
})


app.listen(8000 , (req , res) => console.log("Server Started...."))