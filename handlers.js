const Knex = require("knex");
const knexOptions = require("./knexfile");
const knex = Knex(knexOptions);

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function getAllUsers(req,res){
    knex
    .select()
    .table('teachers')
    .then((data)=>{
        res.json(data)
    })
    .catch(error => {
        res.json({"fail":"Error occured!"})
    })
}

function registerTeacher(req,res){

    //hash password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    // required db values
    var values = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contact: req.body.contact,
        address: req.body.address,
        username: req.body.username,
        password: hashedPassword
    };

    //add to db
    knex('teachers')
    .insert(values)
    .then(
        ()=>{
            res.json({'status':'teacher registered'})
        }
    )
    .catch(error => {
            res.json({'status':'error'})
    })

    
}

function registerStudent(req,res){

    //hash password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    // required db values
    var values = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contact,
        address: req.body.address,
        username: req.body.username,
        class: req.body.class,
        password: hashedPassword
    };

    //add to db
    knex('students')
    .insert(values)
    .then(
        ()=>{
            res.json({'status':'student registered'})
        }
    )
    .catch(error => {
            res.json({'status':'error'})
    })
}

function getAllStudent(req,res){
    knex
    .select()
    .table('students')
    .then((data)=>{
        res.json(data)
    })
    .catch(error => {
        res.json({"fail":"Error occured!"})
    })
}


module.exports = {
    registerTeacher : registerTeacher,
    getAllUsers : getAllUsers,
    registerStudent : registerStudent,
    getAllStudent : getAllStudent
}