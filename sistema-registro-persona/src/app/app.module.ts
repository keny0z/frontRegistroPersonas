import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPersonaComponent } from './componentes/formulario-persona/formulario-persona.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListarPersonaComponent } from './componentes/listar-persona/listar-persona.component';
import { ActualizarPersonaComponent } from './componentes/actualizar-persona/actualizar-persona.component';
import { EliminarPersonaComponent } from './componentes/eliminar-persona/eliminar-persona.component';
import { RegistrarEntradaComponent } from './componentes/registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent } from './componentes/registrar-salida/registrar-salida.component';
import { ConsultarEntradasSalidasComponent } from './componentes/consultar-entradas-salidas/consultar-entradas-salidas.component';
import { FormsModule } from '@angular/forms';
import { ConsultarMovimientosComponent } from './componentes/consultar-movimientos/consultar-movimientos.component';
import { RegistrarMovimientoComponent } from './componentes/registrar-movimiento/registrar-movimiento.component';
import { LoginComponent } from './componentes/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListarPersonaComponent,
    FormularioPersonaComponent,
    ActualizarPersonaComponent,
    EliminarPersonaComponent,
    RegistrarEntradaComponent,
    RegistrarSalidaComponent,
    ConsultarEntradasSalidasComponent,
    ConsultarMovimientosComponent,
    RegistrarMovimientoComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
