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



// Set the views directory
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'ejs');



app.get('/', (req, res)=>{
    res.send("Main Page")
})


//port listener
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})