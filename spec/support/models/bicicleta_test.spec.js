var bicicleta = require('../../../model/bicicleta');

beforeEach(() => {
    bicicleta.allBicis = [];
});

describe('bicicleta.allBicis', () => {
    it('El allBicis esta vacio', () => {
        expect(bicicleta.allBicis.length).toBe(0);
    });
});
/**
 * Metodo para testear método agregar
 */
describe('bicicleta.add', () => {
    it('Se agrego una bicicleta', () => {
        expect(bicicleta.allBicis.length).toBe(0);

        var a = new bicicleta(1, 'rojo', 'urbana', [-4.0214861, -79.2167126]);
        bicicleta.add(a);

        expect(bicicleta.allBicis.length).toBe(1);
        expect(bicicleta.allBicis[0]).toBe(a);

    });
});

describe('bicicleta.findById', () => {
    it('debe devolver la bici con id 1', () => {
        expect(bicicleta.allBicis.length).toBe(0);
        var aBici = new bicicleta(1, 'rojo', 'urbana', [-4.0214861, -79.2167126]);
        var aBici2 = new bicicleta(2, 'verde', 'urbana', [-4.0198306, -79.217108]);
        bicicleta.add(aBici);
        bicicleta.add(aBici2);

        var targetBici = bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);
    });
});

describe('bicicleta.removeById', () => {
    it('se elimino ', () => {
        expect(bicicleta.allBicis.length).toBe(0);
        var aBici = new bicicleta(1, 'rojo', 'urbana', [-4.0214861, -79.2167126]);
        var aBici2 = new bicicleta(2, 'verde', 'urbana', [-4.0198306, -79.217108]);
        bicicleta.add(aBici);
        bicicleta.add(aBici2);

        var deleteBici = bicicleta.removeById(1);
        var targetBici = bicicleta.findById(2);
        expect(targetBici.id).toBe(2);
        expect(targetBici.color).toBe(aBici2.color);
        expect(targetBici.modelo).toBe(aBici2.modelo);
    });
});