import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProveedorCreateDTO } from 'src/controllers/proveedor/dto/proveedor-create.dto';
import { ProveedorEntity } from 'src/database/entities/proveedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorService {

    constructor(
        @InjectRepository(ProveedorEntity)
        private readonly proveedorRepository : Repository<ProveedorEntity>,
    ){
    }

    public async getProveedores():Promise<ProveedorEntity[]> {
        return this.proveedorRepository.find();
    }

    public async create(newProveedor : ProveedorCreateDTO) : Promise<ProveedorEntity> {
        const buscarProveedor  = await this.proveedorRepository.findOne(
            {
                where :  { nombre : newProveedor.nombre},
            }
        );

        if(buscarProveedor){
            throw new BadRequestException('Proveedor Existente');
        }

        return await this.proveedorRepository.save(newProveedor)

    }
}
