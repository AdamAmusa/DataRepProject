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

//defines objects for the schedule collection
const scheduleSchema = new mongoose.Schema({
    day: String,
    time: String,
    event: String,
    description: String
})

//confirms which database you would like the collection to be in
const scheduleModel = mongoose.model('my_schedule', scheduleSchema);

//server listens for a http request with a delete method
app.delete('/api/schedule/:id', async (req, res)=>{
    console.log("Delete: "+req.params.id);
    
    let schedule= await scheduleModel.findByIdAndDelete(req.params.id);//find a schedule with the id and deletes it
    res.send(schedule);
})



app.put('/api/schedule/:id', async(req, res)=>{//routes the HTTP PUT requests to the specified path with the specified callback functions based off of the id

    console.log("Update: " + req.params.id);

    let schedule = await scheduleModel.findByIdAndUpdate(req.params.id, req.body, {new:true}); //replaces the whole mongose data from a specific id

    res.send(schedule);//sends data to webpage
})

app.post('/api/schedule',(req, res)=>{//routes the HTTP PUT requests to the specified path with the specified callback functions based off of the id
    console.log(req.body);
    //Creates new schedule in the database using data from the create page
    scheduleModel.create({
        day: req.body.day,
        event: req.body.event,
        time: req.body.time,
        description: req.body.description
    })
        .then(()=>{res.send("Schedule Created")})
        .catch(()=>{res.send("Schedule NOT Created")});
})

app.get('/api/schedules', async(req,res) =>{
    let schedules = await scheduleModel.find({});
    res.json(schedules);
})

app.get('/api/schedule/:identifier', async(req,res)=>{
    console.log(req.params.identifier);

    let schedule = await scheduleModel.findById(req.params.identifier); //Finds schedule by id
    res.send(schedule);//sends the schedule that was found to the webpage
})


app.get('/', (req, res)=>{
    res.send("Main Page")
})


//port listener
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})