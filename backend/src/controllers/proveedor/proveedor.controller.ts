import { Controller, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { ProveedorService } from 'src/providers/proveedor/proveedor.service';
import { ProveedorEntity } from 'src/database/entities/proveedor.entity';
import { ProveedorResponseDTO } from './dto/proveedor-response.dto';
import { ProveedorCreateDTO } from './dto/proveedor-create.dto';
@Controller('proveedor')
export class ProveedorController {

    constructor(
        private proveedorService : ProveedorService,
    ){
        
    }


    // ruta para obtener todos los proveedores
    @Get()
    public async getAllProveedores() : Promise<ProveedorEntity[]>{
        return await this.proveedorService.getProveedores();
    }


    // Ruta para cambiar los datos de un proveedor.
    @Post()
    public async createProveedor(
        @Body(ValidationPipe) request :ProveedorCreateDTO,
    ) : Promise<ProveedorResponseDTO>{ 
        if(request ) {
            await this.proveedorService.create(request);
            const response: ProveedorResponseDTO = {
                data : 'Proveedor Creado',
                statusCode: 200,
                statusDescription: 'Listo',
                error: null,
            } as ProveedorResponseDTO;

            return response;
        }
    }
}

