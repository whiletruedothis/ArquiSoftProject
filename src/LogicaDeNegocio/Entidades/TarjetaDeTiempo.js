class TarjetaDeTiempo{
    constructor(horaDeEntrada, horaDeSalida){
        this.horaDeEntrada = horaDeEntrada;
        this.horaDeSalida  = horaDeSalida;
    }

    calcularDuracion(){
        return Math.abs(this.horaDeSalida.getHours() - this.horaDeEntrada.getHours());
    }
}

module.exports = TarjetaDeTiempo;