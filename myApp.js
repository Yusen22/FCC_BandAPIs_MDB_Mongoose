let express = require('express');
const res = require('express/lib/response');
let app = express();
require('dotenv').config()

console.log('Hello World!')

// Prints Hello express to page with path '/'

// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })


// Middleware logger for console log method, path and ip address

app.use(function logger(req, res, next) {
    const string = req.method + " " + req.path + " - " + req.ip
    console.log(string);
    next();
})


// Sends file as response when GET request given to '/' path 

const absolutePath = __dirname + '/views/index.html'

app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})



// Middleware function to serve static files in public folder 

app.use('/public', express.static(__dirname + '/public'))



// Serves json object at the /json endpoint route 
// uses .env to set message style with variable 


app.get('/json', (req, res) => {

    let mymessage = "Hello json"

    if(process.env.MESSAGE_STYLE === 'uppercase') {
        mymessage = mymessage.toUpperCase()
    }
    res.json({ 
        message: mymessage
    })
});

// Middleware function that gives json string of time on /now endpoint

app.get('/now', function(req, res, next) {
    req.time = new Date().toString()
    next();
},function(req, res) {
    res.json({
        time: req.time
    })
})


// echo server that takes word from params and sends back as json 

app.get('/:word/echo', (req, res) => {
    const { word } = req.params
    res.json({
        echo: word
    })
})

// How to create query strings

app.get('/name', (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;

    res.json({
    name: `${firstName} ${lastName}`
})
})





































module.exports = app;
