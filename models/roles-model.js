const roles = {
        Admin :{
            rolename : "Admin",
            can : ['delete'],
            inherits :['Teacher']
        },
        Teacher :{
            rolename : "Teacher",
            can : ['edit'],
            inherits :['Student']
        },
        Student :{
            rolename : "Student",
            can : ['read']
        }
}

module.exports = roles;