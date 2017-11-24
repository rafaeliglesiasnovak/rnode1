var http = require('http');

// var configuracoes = {
//     hostname: 'localhost',
//     port: 3000,
//     path: '/celulares/json',
//     headers: {
//         'Accept': 'application/json'
//     }
// };

var configuracoes = {
    var port = process.env.PORT || 3000;
    hostname: 'us-cdbr-iron-east-05.cleardb.net',
    port: port,
    path: '/celulares/json',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(configuracoes, function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log('Corpo:' +body);
    });
});