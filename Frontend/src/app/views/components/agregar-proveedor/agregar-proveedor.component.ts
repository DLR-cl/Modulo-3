import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { ProveedoresService } from '../../services/proveedores.service';
import { CommonModule } from '@angular/common';
import { FormValidatorDirective } from '../../../directives/form-validator.directive';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-proveedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormValidatorDirective],
  templateUrl: './agregar-proveedor.component.html',
  styleUrl: './agregar-proveedor.component.css'
})
export class AgregarProveedorComponent {


  constructor(private router : Router){

  }
  regProvider : FormGroup =  new FormGroup({
    nombre : new FormControl<string>('', [Validators.required]),
    numeroContacto : new FormControl<string>('', [Validators.required, Validators.maxLength(11), Validators.minLength(9)]),
    email : new FormControl<string>('', [Validators.email, Validators.required]),
  })

  private readonly _proveedorService$ = inject(ProveedoresService);
  ngOnInit(){


  }

  
  public agregarProveedor(){
    
    this._proveedorService$.agregarProveedor(
      this.regProvider.controls['nombre'].value,
    this.regProvider.controls['numeroContacto'].value,
    this.regProvider.controls['email'].value
    ).subscribe(
      (data) => {
        console.log(data);
      }
    )

    this.router.navigateByUrl('proveedores')
    
  }
}
