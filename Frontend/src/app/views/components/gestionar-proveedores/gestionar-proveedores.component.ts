import { Component, inject } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';
import { Proveedor, ProveedorResponse } from '../../../models/proveedor/proveedor';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestionar-proveedores',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './gestionar-proveedores.component.html',
  styleUrl: './gestionar-proveedores.component.css'
})
export class GestionarProveedoresComponent {
  private readonly _proveedoresService$ = inject(ProveedoresService);
  public proveedores! : ProveedorResponse[];
  public showDetails : boolean = false;
  public proveedor! : ProveedorResponse;
  constructor(
    private router : Router,
  ){}

  ngOnInit(){

    this._proveedoresService$.obtenerProveedores().subscribe(
      (data) => {
        this.proveedores = data;
        console.log(data);
      }
    )
  }

  public recuperarDetallesDelProveedor(idProveedor: number){
    let i : number = 0;
    while( i < this.proveedores.length){
      if(this.proveedores[i].idProveedor == idProveedor){
        this.proveedor = this.proveedores[i];
        this.showDetails = true;
        break;
      }
      i++; 
    }

  }

  public volver(){
    this.showDetails = false;
  }
  public goToAgregarProveedor(){
    this.router.navigateByUrl("proveedores/agregarProveedor");
  }
}
