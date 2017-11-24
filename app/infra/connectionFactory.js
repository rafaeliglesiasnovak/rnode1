var mysql  = require('mysql');

function createDBConnection() {
    if(!process.env.NODE_ENV) {
        var urlConexion = process.env.CLEARDB_DATABASE_URL;
        var groups = urlConexion.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
        return mysql.createConnection({
            host: groups[2],
            user: groups[0],
            password: groups[1],
            database: groups[3]
        });
    }

    if(process.env.NODE_ENV == 'test') {
        var urlConexion = process.env.CLEARDB_DATABASE_URL;
        var groups = urlConexion.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
        return mysql.createConnection({
            host: groups[2],
            user: groups[0],
            password: groups[1],
            database: groups[3]
        });
    }
}

module.exports = function() {
    return createDBConnection;
}