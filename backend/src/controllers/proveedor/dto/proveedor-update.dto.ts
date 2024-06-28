import { IsOptional, IsString } from "class-validator";

export class ProveedorUpdateDTO{

    @IsOptional()
    @IsString()
    name : string;

    @IsOptional()
    @IsString()
    email : string;

    @IsOptional()
    @IsString()
    numeroContacto : string;
}