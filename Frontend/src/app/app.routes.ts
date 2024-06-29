import { Routes } from "@angular/router";
import { GestionarProveedoresComponent } from "./views/components/gestionar-proveedores/gestionar-proveedores.component";
import { AppComponent } from "./app.component";

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'Listar Proveedores',
        component: GestionarProveedoresComponent
    }
];
