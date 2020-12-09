var app = require("express")();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://apis.data.go.kr");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
    next();
});

// var express = require('express');
// var app = express();
//
// var cors = require('cors');
// var bodyParser = require('body-parser');
//
// //enables cors
// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
// }));
// app.get("/", function(req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// });

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('./index.html', (err, data) => {
//         if(err) {
//             throw err;
//         }
//         res.end(data);
//     });
// }).listen(8080, () => {
//     console.log('8080 포트 대기중');
// });

/*function hello() {
    console.log('Hello World');
}

// hello();
