import { Servicio } from "./Servicio";

export abstract class Habitacion{
    protected numero:number;
    protected estado:string;
    protected precioBase:number;
    protected serviciosAdicionales:Servicio[] = [];

    constructor(numero:number, estado:string, precioBase:number){

        this.numero = numero;
        this.estado = estado;
        this.precioBase = precioBase;

    }

    public reservar():void{
        if(this.estado === "disponible"){
            this.estado = "reservada";
            console.log(`Habitacion ${this.numero} se reservo`);
        }else{
            console.log(`La habitacion ${this.numero} no esta disponible`);
        }
    }

    public liberar(): void{
        this.estado= "disponible";
        console.log(`Habitacion ${this.numero} liberada`)
    }

    abstract calcularCostoTotal(dias: number): number;

    public agregarServicio(servicio:Servicio):void{
        //Logica (que no haya servicios repetidos)
        this.serviciosAdicionales.push(servicio);
    }
}