import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedorModule } from './proveedor/proveedor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ControllersModule } from './controllers/controllers.module';
@Module({
  imports: [ProveedorModule, TypeOrmModule, DatabaseModule,
     ConfigModule.forRoot({
      isGlobal:true,
     }), ControllersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
