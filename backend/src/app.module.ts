import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedorController } from './controllers/proveedor/proveedor.controller';
import { ProveedorService } from './services/proveedor/proveedor.service';
import { ProveedorModule } from './proveedor/proveedor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProveedorModule, TypeOrmModule, DatabaseModule],
  controllers: [AppController, ProveedorController],
  providers: [AppService, ProveedorService],
})
export class AppModule {}
