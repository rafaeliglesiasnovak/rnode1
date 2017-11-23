function CelularesDAO(connection) {
    this._connection = connection;
}

CelularesDAO.prototype.lista = function(callback) {
    this._connection.query('select * from celulares', callback);
}

CelularesDAO.prototype.salva = function(celular, callback) {
    this._connection.query('insert into celulares set ?', celular, callback);
}

module.exports = function() {
    return CelularesDAO;
};



// UDID 
// LOCALIZACAO

// CREATE TABLE celulares (
// udid text NOT NULL,
// beacon text NOT NULL, 
// localizacao text DEFAULT NULL
// );

// insert into celulares(udid, beacon, localizacao)
// values ('1', 'lemon1', 'escritorio');

// insert into celulares(udid, beacon, localizacao)
// values ('2', 'candy2', 'suite');

// insert into celulares(udid, beacon, localizacao)
// values ('3', 'mint', 'entrada');