import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ParametroConexion } from '../../utilidades/parametro-conexion';
import { Observable } from 'rxjs';
import { Movimiento } from 'src/app/modelo/movimiento';
import { ComandoMovimiento } from 'src/app/comando/comando-movimiento';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  endPoint= this.parametroConexion.getUrlBase().concat('/v1/movimiento');

  constructor(private http: HttpClient, private parametroConexion: ParametroConexion ) { }
  listarMovimientos(): Observable<Movimiento[]>{
    return this.http.get<Movimiento[]>(this.endPoint, { headers: this.parametroConexion.getSimpleHeader()});

  }

  insertar(comandoMovimiento: ComandoMovimiento): Observable<Movimiento>{
    return this.http.post<Movimiento>(this.endPoint, comandoMovimiento, {headers: this.parametroConexion.getJsonHeader()});
  }
}
