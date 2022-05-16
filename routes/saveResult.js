const express = require('express');
const router = express.Router();
const tests = require("../models/curriculo-model");
const controller = require("../controllers/curriculo-controller");
const UserModel = require('../models/UserModel')
router
    .route('/')
    .post((req,res) => {
        const user = new UserModel({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            score: req.body.result
        });

        user.save()
        //     .then(data => {
        //
        //     res.status(200).render('results', {mydata: "user "+ data.firstName +" created succesfully!"})
        // }).catch(err => {
        //     res.render('results', {mydata: err.message || "Some error occurred while creating user"})
        // });
    })

module.exports = router;