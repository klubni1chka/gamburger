const express = require('express');
const port = 3003;
const path = require('path');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

router.post(('/saveAnswer'),(req,res) => {
        const user = new UserModel({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            score: req.body.result
        });

        user.save().then(data => {

            res.status(200).render('results', {mydata: "user "+ data.firstName +" created succesfully!"})
        }).catch(err => {
            res.render('results', {mydata: err.message || "Some error occurred while creating user"})
        });
    })

app.use("/", require("./routes/root"));
app.use('/test1', require('./routes/test1'));
app.use('/test2', require('./routes/test2'));

const mongoose = require('mongoose');
const UserModel = require("./models/UserModel");
// const uri = "mongodb+srv://Mooz:20040705@cluster0.ssvvs.mongodb.net/?retryWrites=true&w=majority"
const uri = "mongodb+srv://admin:admin@cluster0.qaotl.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.listen(port, err => {
    console.log(`Server is listening on http://localhost:${port}`);
});
``