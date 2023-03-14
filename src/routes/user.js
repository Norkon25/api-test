const express = require('express');
const userSchema = require("../models/user")

const router = express.Router();

//Crear usuario
router.post('/users', (req, res)=>{
    const user = userSchema(req.body);
    user.save()
    .then((data)=> res.json(data))
    .catch(error=> res.json({message: error}))
})
//Traer usuarios
router.get('/users', (req, res)=>{
    userSchema
    .find()
    .then(data=> res.json(data))
    .catch(error=> res.json({message: error}))
})
//Traer usuario especifico
router.get('/users/:id', (req, res)=>{
    const { id } = req.params;
    userSchema
    .findById(id)
    .then(data=> res.json(data))
    .catch(error=> res.json({message: error}))
})

module.exports = router;