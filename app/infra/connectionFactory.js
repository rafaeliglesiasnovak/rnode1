var mysql  = require('mysql');

// function createDBConnection() {
//     if(!process.env.NODE_ENV) {
//         var urlConexion = process.env.CLEARDB_DATABASE_URL;
//         var groups = urlConexion.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
//         return mysql.createConnection({
//             host: groups[2],
//             user: groups[0],
//             password: groups[1],
//             database: groups[3]
//         });
//     }

//     if(process.env.NODE_ENV == 'test') {
//         var urlConexion = process.env.CLEARDB_DATABASE_URL;
//         var groups = urlConexion.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
//         return mysql.createConnection({
//             host: groups[2],
//             user: groups[0],
//             password: groups[1],
//             database: groups[3]
//         });
//     }
// }

// function createDBConnection() {
//     if(!process.env.NODE_ENV) {
//         return mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: '',
//             database: 'tcc'
//         });
//     }

//     if(process.env.NODE_ENV == 'test') {
//         return mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: '',
//             database: 'tcc'
//         });
//     }
// }

function createDBConnection() {
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'us-cdbr-iron-east-05.cleardb.net',
            user: 'bad074c9e3507c',
            password: '6af0cbe9',
            database: 'heroku_c5c7ddbf8ef52c6'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'us-cdbr-iron-east-05.cleardb.net',
            user: 'bad074c9e3507c',
            password: '6af0cbe9',
            database: 'heroku_c5c7ddbf8ef52c6'
        });
    }
}

module.exports = function() {
    return createDBConnection;
}

mysql://bad074c9e3507c:6af0cbe9@us-cdbr-iron-east-05.cleardb.net/heroku_c5c7ddbf8ef52c6?reconnect=true