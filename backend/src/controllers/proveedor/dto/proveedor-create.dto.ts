import { IsNotEmpty, IsString} from "class-validator";

export class ProveedorCreateDTO {


    @IsNotEmpty()
    @IsString()
    nombre : string;

    @IsNotEmpty()
    @IsString()
    email : string;

    @IsNotEmpty()
    @IsString()
    numeroContacto : string;
    
}