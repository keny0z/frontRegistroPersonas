import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Persona } from '../../modelo/persona';
import { ParametroConexion } from '../../utilidades/parametro-conexion';
import { ComandoPersona } from '../../comando/comando-persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  endPoint= this.parametroConexion.getUrlBase().concat('/v1/persona');

 
  constructor(private http: HttpClient, private parametroConexion: ParametroConexion) { }

  listarPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.endPoint, { headers: this.parametroConexion.getSimpleHeader()});

  }

  insertar(comandoPersona: ComandoPersona): Observable<Persona>{
    return this.http.post<Persona>(this.endPoint, comandoPersona, {headers: this.parametroConexion.getJsonHeader()});
  }
  consultarPorId(idPersona: number): Observable<Persona>{
    return this.http.get<Persona>(`${this.endPoint}/${idPersona}`, { headers: this.parametroConexion.getSimpleHeader()});
  }

  actualizar(comandoPersona: ComandoPersona): Observable<Persona>{
    return this.http.put<Persona>(`${this.endPoint}/${comandoPersona.idPersona}`, comandoPersona, {headers: this.parametroConexion.getJsonHeader()});
  }

  eliminar(idPersona: number): Observable<Persona>{
    return this.http.delete<Persona>(`${this.endPoint}/${idPersona}`, { headers: this.parametroConexion.getSimpleHeader()});
  }

  

 
}
