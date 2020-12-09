// let express = require("express");
// let bodyParser = require("body-parser");
// let cors = require("cors");
// let app = express();
//
// let cors_origin = [`http://apis.data.go.kr`];
//
// app.use(
//     cors({
//         origin: cors_origin, // 허락하고자 하는 요청 주소
//         credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
//     })
// );

// var cors = require('cors'); //import cors module
// var express = require('express');
// var app = express();
//
// var whitelist = [http://apis.data.go.kr']; //white list consumers
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(null, false);
//         }
//     },
//     methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//     credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
//     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
// };
//
// app.use(cors(corsOptions)); //adding cors middleware to the express with above configurations

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