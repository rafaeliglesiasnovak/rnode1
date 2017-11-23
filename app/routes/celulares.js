module.exports = function(app) {

    var listaCelulares = function(req, res, next) {
        var connection = app.infra.connectionFactory();
        var celularesDAO = new app.infra.CelularesDAO(connection);

        celularesDAO.lista(function(err, results) {
            if(err) {
                return next(err);
            }
            res.format({
                html: function() {
                    res.render('celulares/lista', {lista:results});
                },
                json: function() {
                    res.json(results);
                }
            });
        });

        connection.end();
    }

    app.get('/celulares', listaCelulares);

    app.get('/celulares/json', function(req, res) {
        var connection = app.infra.connectionFactory();
        var celularesDAO = new app.infra.CelularesDAO(connection);

        celularesDAO.lista(function(err, results) {
            res.json(results);
        });

        connection.end();
    });

    app.get('/celulares/form', function(req, res) {
        res.render('celulares/form', {errosValidacao:{}, celular:{}});
    });

    app.post('/celulares', function(req, res) {
        var celular = req.body;

        req.assert('udid', 'UDID é obrigatório').notEmpty();
        req.assert('beacon', 'Beacon é obrigatório').notEmpty();
        req.assert('localizacao', 'Localizacao é obrigatório').notEmpty();

        var erros = req.validationErrors();
        if(erros) {
            res.format({
                html: function() {
                    res.status(400).render('celulares/form', {errosValidacao:erros, celular:celular});
                },
                json: function() {
                    res.status(400).json(erros);
                }
            });

            return;
        }

        var connection = app.infra.connectionFactory();
        var celularesDAO = new app.infra.CelularesDAO(connection);

        celularesDAO.salva(celular, function(err, results) {
            res.redirect('/celulares');
        });

        connection.end();
    });
}
