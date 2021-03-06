var http = require('http');
var querystring = require('querystring');

var data = {
    "retain": 1,
    "PBX/line status.0": 1,
    "PBX/line status.1": 0,
    "PBX/version": "Mock Phone System 1.0",
    "apikey": "MDAwMDAwMDAxM0FDRDhDQj=="
}

var options = {
    host: 'example.com',
    port: 80,
    path: "/ncintf/rest/1/openmon/counter?"+querystring.stringify(data),
    method: "GET",
    headers: {'Content-Type': 'application/json; charset=utf-8'}
};

var req = http.get(options, function(res){
    console.log('STATUS: ' + res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
}).on('error', function(e) {
    console.log('problem with request: ' + e.message);
});
