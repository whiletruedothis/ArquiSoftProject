const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import { beforeEach } from 'mocha';

describe('Funciones basicas del metodo de pago', () => {

    let empleado;
    beforeEach(() => {
        empleado = new Empleado('Carlos');
    });

    it('Deberia crear un empleado con el metodo de pago por cheque', () => {
        empleado.crearMetodoDePago('Cheque');
        expect(empleado.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por cheque');
    })

    it('Deberia crear un empleado con el metodo de pago en efectivo', () => {
        empleado.crearMetodoDePago('Efectivo');
        expect(empleado.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado en efectivo por RRHH');
    })

    it('Deberia crear un empleado con el metodo de pago por deposito bancario', () => {
        empleado.crearMetodoDePago('Deposito');
        expect(empleado.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por deposito bancario');
    })

    it('Deberia crear un empleado con el metodo de pago efectivo y cambia a cheque', () => {
        empleado.crearMetodoDePago('Efectivo');
        empleado.crearMetodoDePago('Cheque');
        expect(empleado.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por cheque');
    })

})