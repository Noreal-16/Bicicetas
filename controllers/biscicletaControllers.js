var bicicleta = require('../model/bicicleta');

exports.bicicleta_list = function(req, res) {
    var lista = bicicleta.allBicis;
    res.render('bicicleta/index', {
        title: 'Bicicletas',
        bicis: lista
    });

};
/**
 * Crear Bicicleta
 * @param {*} req 
 * @param {Para enviar datos a la vista} res 
 */
exports.bicicleta_create_get = function(req, res) {
    res.render('bicicleta/create', {
        title: 'Bicicleta create'
    });
};

exports.bicicleta_create_post = function(req, res) {
    var bici = new bicicleta(
        req.body.id,
        req.body.color,
        req.body.modelo
    );
    bici.ubicacion = [req.body.latitude, req.body.longitud];
    bicicleta.add(bici);

    res.redirect('/bicicleta');
};
/**
 * Data Updates
 * @param {Obtener datos} req 
 * @param {Enviar respuesta} res 
 */
exports.bicicleta_update_get = function(req, res) {
    var bici = bicicleta.findById(req.params.id);
    res.render('bicicleta/update', { bici });
};

exports.bicicleta_update_post = function(req, res) {
    var bici = bicicleta.findById(req.params.id);
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.latitude, req.body.longitud];
    res.redirect('/bicicleta');
};
/**
 * Metodo para eliminar una Bicicleta
 * @param {Para obtener datos desde el formulario} req 
 * @param {Para enviar respuesta al UI} res 
 */
exports.bicicleta_delete_post = function(req, res) {
    bicicleta.removeById(req.body.id);
    res.redirect('/bicicleta');
};