import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedorResponse } from '../../models/proveedor/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor( private readonly http: HttpClient) { }



  public obtenerProveedores() : Observable<ProveedorResponse[]>{
    return this.http.get<ProveedorResponse[]>('');
  }

  public agregarProveedor(nombre : string, numeroContacto: string, email : string){
    return this.http.post('', {
      "name" : nombre,
      "numeroContacto" : numeroContacto,
      "email" : email
    });
  }

}
