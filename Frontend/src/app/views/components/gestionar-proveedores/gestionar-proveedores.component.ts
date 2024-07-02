import { Component, inject } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';
import { Proveedor } from '../../../models/proveedor/proveedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-proveedores',
  standalone: true,
  imports: [],
  templateUrl: './gestionar-proveedores.component.html',
  styleUrl: './gestionar-proveedores.component.css'
})
export class GestionarProveedoresComponent {
  private readonly _proveedoresService$ = inject(ProveedoresService);
  public proveedores! : Proveedor[];


  constructor(
    private route : Router,
  ){}
  ngOnInit(){

    this._proveedoresService$.obtenerProveedores().subscribe(
      (data) => {
        this.proveedores = data;
      }
    )
  }

  public goToAgregarProveedor(){
    this.route.navigate(['agregarProveedor']);
  }
}
