const express = require('express');
const mongooes = require('mongoose');
const Router = require('./Routs/Router.js');


const app = express();
const port = 3000;

//middelware
app.use(express.json());



//DB conection
mongooes.connect('mongodb://localhost:27017/todo');
const db = mongooes.connection;


db.on('error', () => {
    console.log('find error in db');
})


db.once('open', () => {
    console.log('done conection db');
})

//code work

app.use(Router);

app.listen(port, () => {
    console.log("server work");
})