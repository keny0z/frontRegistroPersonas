import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComandoMovimiento } from 'src/app/comando/comando-movimiento';
import { Persona } from 'src/app/modelo/persona';
import { TipoMovimiento } from 'src/app/modelo/tipo-movimiento';
import { PersonaService } from 'src/app/servicios/personas/persona.service';
import Swal from 'sweetalert2';
import { Movimiento } from '../../modelo/movimiento';
import { MovimientoService } from '../../servicios/movimiento/movimiento.service';


@Component({
  selector: 'app-registrar-movimiento',
  templateUrl: './registrar-movimiento.component.html',
  styleUrls: ['./registrar-movimiento.component.css']
})
export class RegistrarMovimientoComponent implements OnInit {

  movimiento: Movimiento=new Movimiento();
  persona: Persona= new Persona();
  comandoMovimiento: ComandoMovimiento;
  

  constructor(private movimientoService: MovimientoService, private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
   
  }

  registrar(): void{

    Swal.fire({
      title: '¿Desea guardar la información?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Sí`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.establecerComando();
        this.insertarInformacion();
      
      } else if (result.isDenied) {
        Swal.fire('La información no ha sido guardada', '', 'info')
      }
    })

  }

  establecerComando(): void{
    debugger
    this.comandoMovimiento= new ComandoMovimiento();
    this.comandoMovimiento.idpersona=this.persona.idPersona;
    this.comandoMovimiento.fecha=new Date();

    this.comandoMovimiento.idTipoMovimiento=2;

    this.comandoMovimiento.tiempo=this.movimiento.tiempo;

  }

  insertarInformacion(): void{

    this.movimientoService.insertar(this.comandoMovimiento).subscribe(

      resp=>{
        Swal.fire('La información ha sido guardada!', '', 'success');
        this.router.navigate(['/consultarMovimientos']);

      }

    );

  }


}
