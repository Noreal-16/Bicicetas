var bicicleta = require('../../model/bicicleta');
var request = require('request');
var server = require('../../bin/www');

describe('bicicleta API', () => {
    describe('GET BICICLETAS /', () => {
        it('Status 200', () => {
            expect(bicicleta.allBicis.length).toBe(0);

            var a = new bicicleta(1, 'rojo', 'urbana', [-4.0214861, -79.2167126]);
            bicicleta.add(a);

            request.get('http://localhost:9000/bicicleta', function(error, response, body) {
                expect(response.statusCode).toBe(200);
            });
        });
    });
});

describe('POST BICICLETA /create', () => {
    it('Status 200', (done) => {
        var headers = { 'content-type': 'application/json' };
        var aBici = '{"id":10, "color":"amarillo", "modelo":"GTX", "latitude":-34, "longitud":-54}';
        request.post({
            headers: headers,
            url: 'http://localhost:9000/bicicleta/create',
            body: aBici,
        }, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            expect(bicicleta.findById(10).color).toBe("amarillo");
            done();
        });
    });
});


var mensaje = 'testeando....';

describe('jasmine', () => {
    it('valores', () => {
        expect(message).toBe('testeando');
        console.log(message);
    });
});