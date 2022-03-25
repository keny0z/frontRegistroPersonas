import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParametroConexion } from 'src/app/utilidades/parametro-conexion';
import { TipoMovimiento } from '../../modelo/tipo-movimiento';

@Injectable({
  providedIn: 'root'
})
export class TipoMovimientoService {

  constructor(private http: HttpClient, private parametroConexion: ParametroConexion) { }

  listarTipoMovimiento(): Observable<TipoMovimiento[]>{
    return this.http.get<TipoMovimiento[]>(this.parametroConexion.getUrlBase().concat('/v1/tipo-movimiento'));

  }
}
