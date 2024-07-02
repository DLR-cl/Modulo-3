import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-agregar-proveedor',
  standalone: true,
  imports: [],
  templateUrl: './agregar-proveedor.component.html',
  styleUrl: './agregar-proveedor.component.css'
})
export class AgregarProveedorComponent {

  regProvider! : FormGroup;
  private readonly _proveedorService$ = inject(ProveedoresService);
  ngOnInit(){

    this.regProvider = new FormGroup({
      nombre : new FormControl<string>('', Validators.required),
      numeroContacto : new FormControl<string>('', Validators.required),
      email : new FormControl<string>('', [Validators.email, Validators.required]),
    })
  }

  
  public agregarProveedor(){
    
    this._proveedorService$.agregarProveedor(
      this.regProvider.controls['nombre'].value,
    this.regProvider.controls['numeroContacto'].value,
    this.regProvider.controls['email'].value
    )
    
  }
}
