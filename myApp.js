let express = require('express');
let app = express();

console.log('Hello World!')

// Prints Hello express to page with path '/'

// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })


// Sends file as response when GET request given to '/' path 

const absolutePath = __dirname + '/views/index.html'

app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})

// Middleware function to serve static files in public folder 

app.use('/public', express.static(__dirname + '/public'))




































 module.exports = app;
