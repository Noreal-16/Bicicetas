var bicicleta = function(id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
};
bicicleta.prototype.toString = function() {
    return 'id : ' + this.id + ' color :' + this.color;
};

bicicleta.allBicis = [];
bicicleta.add = function(sBici) {
    bicicleta.allBicis.push(sBici);
};

bicicleta.findById = function(aBiciId) {
    var aBici = bicicleta.allBicis.find(function(x) {
        return x.id == aBiciId;
    });
    if (aBici) {
        return aBici;
    } else {
        throw new Error(`EL id Ingresado no es enconrado ${aBiciId}`);
    }
};

bicicleta.removeById = function(aBiciId) {
    var aBici = bicicleta.findById(aBiciId);
    for (var i = 0; i < bicicleta.allBicis.length; i++) {
        if (bicicleta.allBicis[i].id == aBiciId) {
            bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
};

var a = new bicicleta(1, 'rojo', 'urbana', [-4.0214861, -79.2167126]);
var b = new bicicleta(2, 'verde', 'urbana', [-4.0198306, -79.217108]);

bicicleta.add(a);
bicicleta.add(b);

module.exports = bicicleta;