const expect = require('chai').expect;

import Empleado from '../src/LogicaDeNegocio/Entidades/Empleado/Empleado.js';
import Fecha from '../src/LogicaDeNegocio/Entidades/Fecha.js';
import GeneradorDeBoletas from '../src/LogicaDeNegocio/Entidades/GeneradorDeBoletas.js';

import CalculadoraFija from '../src/LogicaDeNegocio/Entidades/Empleado/CalculadoraSalario/CalculadoraFija.js';
import CalculadoraFechaFija from '../src/LogicaDeNegocio/Entidades/Empleado/CalculadoraFechaPago/CalculadoraFechaFija.js';

describe('Deberia generar boletas para cada empleado', () => {

    it('Verificar si Genera la boletas para Carlos y Juan', () => {

        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(28,2,2019);

        let fechaInicioTrabja = new Fecha(1,4,2019);

        let calculadoraFija = new CalculadoraFija(2000,fechaInicioTrabja);      
        let calculadoraFechaFija = new CalculadoraFechaFija();
     
        let Carlos = new Empleado('Carlos', 'Bodoque', 77777777, 'carlosBodoque@esMiEmail.com', calculadoraFija, calculadoraFechaFija);

        let listaDeEmpleados = [];
        listaDeEmpleados.push(Carlos);
       
        let generadorDeBoletas = new GeneradorDeBoletas(listaDeEmpleados);
 
    
        expect(generadorDeBoletas.generarBoletas(fecha)[0].empleado.nombre).equal('Carlos');
    
    })

})