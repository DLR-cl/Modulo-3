import { Routes } from "@angular/router";
import { GestionarProveedoresComponent } from "./views/components/gestionar-proveedores/gestionar-proveedores.component";
import { AppComponent } from "./app.component";
import { AgregarProveedorComponent } from "./views/components/agregar-proveedor/agregar-proveedor.component";
import { HomeComponent } from "./views/home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
    ,
    {
        path: "proveedores",
        component: GestionarProveedoresComponent,
    },

    {
        path: "proveedores/agregarProveedor",
        component: AgregarProveedorComponent,
    },

];
