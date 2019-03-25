const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

import Employee from '../src/Employee.js';
import SalaryTicket from '../src/SalaryTicket.js';

describe('The basic functions of Salary Calculator', ()=>{
    let fixedEmployee = new Employee('Carl','fixed');

    it('generate a salary ticket of 100$ for fixed employeer', ()=>{
        let salaryTicket = new SalaryTicket(fixedEmployee)
        expect(salaryTicket.salary).equal(100);
    })


})