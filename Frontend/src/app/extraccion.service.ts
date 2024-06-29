// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class DataService {
//   private apiUrl = 'https://localhost:3000/proveedor'; // URL de tu servidor backend

//   constructor(private http: HttpClient) {}

//   obtenerDatos() {
//     return this.http.get(`${this.apiUrl}/datos`);
//   }
// }

// // En tu componente
// export class MiComponente {
//   datos: any[];

//   constructor(private dataService: DataService) {
//     this.dataService.obtenerDatos().subscribe((data: any[]) => {
//       this.datos = data;
//     });
//   }
// }