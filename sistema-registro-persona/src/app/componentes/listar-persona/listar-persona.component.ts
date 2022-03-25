import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PersonaService } from '../../servicios/personas/persona.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ComandoPersona } from 'src/app/comando/comando-persona';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {

  persona: Persona= new Persona();
  listadoPersonas: Persona[] = [];
  idPersona: number;
  comandoPersona: ComandoPersona;

  constructor(private personaService: PersonaService, private router: Router,private route: ActivatedRoute) {
    this.idPersona= +this.route.snapshot.paramMap.get('idPersona');


   }

  ngOnInit(): void {
    this.personaService.listarPersonas().subscribe(
      resp =>{
         this.listadoPersonas=resp;
         if(this.listadoPersonas.length===0){
          Swal.fire({
            icon: 'info',
            title: 'Vaya...',
            text: 'Actualmente no hay ninguna persona registrada',
            footer: ''
          })
         }
        }
    );
  }

  actualizarPersona(persona: Persona): void{
    this.router.navigate([`/actualizar/${persona.idPersona}`])

  }

  


  eliminarPersona(persona: Persona): void{
    Swal.fire({
      title: '¿Desea eliminar la información?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Sí`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this.eliminarInformacion(persona.idPersona);
      
      } else if (result.isDenied) {
        Swal.fire('La información no ha sido eliminada', '', 'info')
      }
    })

    this.router.navigate([`/eliminar/${persona.idPersona}`])
  }

  eliminarInformacion(idPersona: number): void{

    this.personaService.eliminar(idPersona).subscribe(

      resp=>{
        Swal.fire('La información ha sido eliminada con exito', '', 'info');
        this.router.navigate(['/listar']);
      }

    

    );
  }

  

}
