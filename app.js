var whitelist = ['*']

var corsOptions = {
    origin: function(origin, callback){
        var isWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
        // callback expects two parameters: error and options
    },
    credentials:true
}

app.use( cors(corsOptions) );

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