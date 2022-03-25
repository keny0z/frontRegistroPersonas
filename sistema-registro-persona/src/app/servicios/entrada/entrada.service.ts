import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Entrada } from '../../modelo/entrada';
import { ParametroConexion } from '../../utilidades/parametro-conexion';
@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private http: HttpClient, private parametroConexion: ParametroConexion ) { }

  listarEntradas(): Observable<Entrada[]>{
    return this.http.get<Entrada[]>(this.parametroConexion.getUrlBase().concat('/v1/entrada'));

  }

  
}
