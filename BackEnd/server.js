//Server Logic -> Backend
const express = require('express')
const path = require('path');

const app = express()
const port = 4000;
const cors = require('cors');

//allows control access to server
app.use(cors());
app.use(function (req, res, next) {
    //response headers that will print out onto the page
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
        
    next();
});

// Middleware to parse incoming request bodies
const bodyParser = require('body-parser');
// Parse URL-encoded data and populate the req.body object
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON data and populate the req.body object
app.use(bodyParser.json());


// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.ey2zjid.mongodb.net/Scheduler?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//defines objects for the book collection
const scheduleSchema = new mongoose.Schema({
    day: String,
    time: String,
    event: String
})

//confirms which database you would like the collection to be in
const scheduleModel = mongoose.model('my_schedule', scheduleSchema);

app.post('/api/schedule',(req, res)=>{//routes the HTTP PUT requests to the specified path with the specified callback functions based off of the id
    console.log(req.body);
    //Creates new book in the database using data from the create page
    scheduleModel.create({
        day: req.body.day,
        event: req.body.event,
        time: req.body.time
    })
        .then(()=>{res.send("Schedule Created")})
        .catch(()=>{res.send("Schedule NOT Created")});
})

app.get('/api/schedules', async(req,res) =>{
    let schedules = await scheduleModel.find({});
    res.json(schedules);
})


app.get('/', (req, res)=>{
    res.send("Main Page")
})


//port listener
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})