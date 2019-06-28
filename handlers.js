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
        res.json("fail","Error occured!")
    })
}

function registerTeacher(req,res){

    //hash password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    // required db values
    var values = {
        username: req.body.firstName,
        username: req.body.lastName,
        username: req.body.contact,
        username: req.body.address,
        username: req.body.username,
        password: hashedPassword,
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


module.exports = {
    registerTeacher : registerTeacher,
    getAllUsers : getAllUsers
}