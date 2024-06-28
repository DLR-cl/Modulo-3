import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { ProveedorEntity } from 'src/database/entities/proveedor.entity';
import { ProveedorController } from './proveedor/proveedor.controller';
import { ProveedorService } from 'src/providers/proveedor/proveedor.service';

@Module({

    imports : [
        DatabaseModule, TypeOrmModule.forFeature([
            ProveedorEntity,
        ])
    ],
    controllers : [
        ProveedorController,
    ],
    providers: [
        ProveedorService,
    ]

})
export class ControllersModule {}
