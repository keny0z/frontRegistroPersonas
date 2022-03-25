import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { MovimientoService } from 'src/app/servicios/movimiento/movimiento.service';
import { PersonaService } from 'src/app/servicios/personas/persona.service';
import Swal from 'sweetalert2';
import { Movimiento } from '../../modelo/movimiento';

@Component({
  selector: 'app-consultar-movimientos',
  templateUrl: './consultar-movimientos.component.html',
  styleUrls: ['./consultar-movimientos.component.css']
})
export class ConsultarMovimientosComponent implements OnInit {

  listadoMovimientos: Movimiento[] = [];
  listadoPersonas: Persona[] = [];
  
  constructor(private movimientoService: MovimientoService,private personaService: PersonaService) { }

  ngOnInit(): void {
   
    this.movimientoService.listarMovimientos().subscribe(
      resp =>{
         this.listadoMovimientos=resp;
         if(this.listadoMovimientos.length===0){
          Swal.fire({
            icon: 'info',
            title: 'Vaya...',
            text: 'Actualmente no hay ningún movimiento registrado',
            footer: ''
          })
         }
        }
    );

  }

}
