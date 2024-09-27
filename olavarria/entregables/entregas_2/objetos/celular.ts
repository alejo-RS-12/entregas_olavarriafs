class Celular {
    
    //estados
   private estaPrendido : boolean;
   private volumenactual : number;
   private mensajesactuales : number;
   private datosActivasdos : boolean;

   //constructor
   constructor(volumen : number, mensajes : number){
    this. volumenactual = volumen; 
    this.mensajesactuales = mensajes;
   }
    
    //metodos
    prenderApagar(): void{
        if(this.estaPrendido){
            this.estaPrendido = false;
        }
        else{
            this.estaPrendido = true;
        }
    }

    estadoDatos() : void{
        if(this.datosActivasdos){
            this.datosActivasdos = false;
        }
        else{
            this.datosActivasdos = true;
        }
    }

    subirvolumen() : void{
        this.volumenactual = this.volumenactual + 1;
    }

    mensajesRecibidos() : void{
        this.mensajesactuales = this.mensajesactuales + 1;
    }

}

//instancias

let Primercelular = new Celular(30, 32);

