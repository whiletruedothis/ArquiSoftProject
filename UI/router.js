const URL = 'http://localhost:3000';
const CREAR_EMPLEADO = '/empleado/crear';
const LISTAR_EMPLEADOS = '/empleados';
const LISTAR_BOLETAS = '/boletas';

APP.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './UI/views/inicio.html',
        controller : 'controladorInicio'
    })
    .when('/crear-empleado', {
        templateUrl : './UI/views/empleado.html',
        controller : 'controladorEmpleado'
    })
    .when('/generar-boletas', {
        templateUrl : './UI/views/boletas.html',
        controller : 'controladorBoleta'
    })
});
