import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GestionarProveedoresComponent } from './views/components/gestionar-proveedores/gestionar-proveedores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GestionarProveedoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
