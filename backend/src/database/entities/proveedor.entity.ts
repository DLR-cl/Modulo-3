import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'proveedor' })
export class ProveedorEntity {

  @PrimaryGeneratedColumn()
  idProveedor: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  numeroContacto: string;
  
}
