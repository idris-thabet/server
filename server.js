/* require('./config/db') ;

const express = require('express');

const app = express(); 
const port = 3000;

const UserRouter = require('./api/User')
// app.use(express.json());
const bodyParser = require('express').json
app.use(bodyParser() ) ;
app.use('/user',UserRouter)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); */


// app.js

// server.js
require('./config/db');

const signupUser = require("./api/signup");
const signinUser = require("./api/signin");
const vacRequest = require("./api/vacationRequest");

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/api/v1/signup", signupUser);
app.post("/api/v1/signin", signinUser);
app.post("/api/v1/vacationRequest", vacRequest);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
