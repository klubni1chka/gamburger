const express = require('express');
const router = express.Router();
const tests = require("../models/curriculo-model");
const controller = require("../controllers/curriculo-controller");
router
    .route('/')
    .get((req, res, next) => {
        const qs = tests.test2.questions
        res.render('test', qs);
    })
    .post((req,res) => controller.saveAnswer(req,res))

module.exports = router;