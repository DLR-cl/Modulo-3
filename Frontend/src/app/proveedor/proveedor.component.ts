import { Component } from '@angular/core';
import { Usuario } from '../modelo/modelo';

@Component({
  selector: 'app-usuario',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class UsuarioComponent {
  miUsuario: Usuario = {
    nombre: 'Juan Pérez',
    telefono: '123-456-7890',
    correo: 'juan@example.com'
  };
}