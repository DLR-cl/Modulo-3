export class Proveedor{

    nombre : string;
    numeroContacto : string;
    email : string;

    constructor(nombre : string, numeroContacto : string, email : string){
        this.nombre = nombre;
        this.numeroContacto = numeroContacto;
        this.email = email;
    }
}

export class ProveedorResponse{
    idProveedor : number = 0;
    nombre : string = "";
    numeroContacto : string = "";
    email : string = "";
}

