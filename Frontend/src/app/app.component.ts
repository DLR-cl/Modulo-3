import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from "./editar/editar.component";
import { EliminarComponent } from "./eliminar/eliminar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
      DetalleComponent, 
      AgregarComponent, 
      EditarComponent, 
      EliminarComponent,
      ]
})
export class NameComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

export class AppComponent {
  title = 'proyecto';
  
}
