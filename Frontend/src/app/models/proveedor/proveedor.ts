export class Proveedor{

    name : string;
    numberPhone : string;
    email : string;

    constructor(name : string, numberPhone : string, email : string){
        this.name = name;
        this.numberPhone = numberPhone;
        this.email = email;
    }
}

export class ProveedorResponse{
    name : string = "";
    numberPhone : string = "";
    email : string = "";
}