import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPersonaComponent } from './componentes/formulario-persona/formulario-persona.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListarPersonaComponent } from './componentes/listar-persona/listar-persona.component';
import { EliminarPersonaComponent } from './componentes/eliminar-persona/eliminar-persona.component';
import { RegistrarEntradaComponent } from './componentes/registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent } from './componentes/registrar-salida/registrar-salida.component';
import { ConsultarEntradasSalidasComponent } from './componentes/consultar-entradas-salidas/consultar-entradas-salidas.component';
import { ConsultarMovimientosComponent } from './componentes/consultar-movimientos/consultar-movimientos.component';
import { RegistrarMovimientoComponent } from './componentes/registrar-movimiento/registrar-movimiento.component';
import { LoginComponent } from './componentes/login/login.component';
 



const routes: Routes = [
  {path: 'crear', component: FormularioPersonaComponent},
  {path: 'listar', component: ListarPersonaComponent},
  {path: 'actualizar/:idPersona', component: FormularioPersonaComponent},
  {path: 'eliminar/:idPersona', component: ListarPersonaComponent},
  {path: 'registrarEntrada', component: RegistrarEntradaComponent},
  {path: 'registrarSalida', component: RegistrarSalidaComponent},
  {path: 'registrarMovimiento', component: RegistrarMovimientoComponent},
  {path: 'consultarEntradaSalida', component: ConsultarEntradasSalidasComponent},
  {path: 'consultarMovimientos', component: ConsultarMovimientosComponent},
  {path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
