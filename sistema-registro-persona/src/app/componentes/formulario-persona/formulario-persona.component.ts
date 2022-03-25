import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { TipoDocumento } from 'src/app/modelo/tipo-documento';
import { PersonaService } from '../../servicios/personas/persona.service';
import { TipoDocumentoService } from '../../servicios/tipo-documento/tipo-documento.service';
import Swal from 'sweetalert2';
import { ComandoPersona } from '../../comando/comando-persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  persona: Persona= new Persona();
  listaTipoDocumentos: TipoDocumento[];
  comandoPersona: ComandoPersona;
  idPersona: number;
  titulo: string;
  textoBoton: string;

  constructor(private tipoDocumentoService: TipoDocumentoService, private personaService: PersonaService,private router: Router, private route: ActivatedRoute ) {
    this.idPersona= +this.route.snapshot.paramMap.get('idPersona');
    if(this.idPersona === 0){
      this.titulo='Registrar persona'
      this.textoBoton='Registrar nueva persona'

    }else{
      this.titulo='Editar persona'
      this.textoBoton='Editar persona'
      this.consultarPersonaPorId();

    }
   }

  ngOnInit(): void {
    this.tipoDocumentoService.listarTipoDocumento().subscribe(
      resp=>{
        this.listaTipoDocumentos=resp;
      }

    );
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

        if(this.idPersona === 0){
          this.insertarInformacion();
        }else{
          this.actualizarInformacion();
        }



       




      
      } else if (result.isDenied) {
        Swal.fire('La información no ha sido guardada', '', 'info')
      }
    })
  }

  establecerComando(): void{

    this.comandoPersona=new ComandoPersona();
    this.comandoPersona.idPersona=this.idPersona;
    this.comandoPersona.idTipoDocumento=this.persona.tipoDocumento.idTipoDocumento;
    this.comandoPersona.numeroDocumento=this.persona.numeroDocumento;
    this.comandoPersona.nombres=this.persona.nombres;
    this.comandoPersona.apellidos=this.persona.apellidos;
  }
  insertarInformacion(): void{
    this.personaService.insertar(this.comandoPersona).subscribe(
      resp=>{
        Swal.fire('La información ha sido guardada!', '', 'success');
        this.router.navigate(['/listar']);

      }
    );
  }

  actualizarInformacion(): void{
    this.personaService.actualizar(this.comandoPersona).subscribe(
      resp=>{
        Swal.fire('La información ha sido actualizada!', '', 'success');
        this.router.navigate(['/listar']);

      }
    );
  }

  consultarPersonaPorId(): void{

    this.personaService.consultarPorId(this.idPersona).subscribe(

      resp=>{
        this.persona=resp;
      }

    );

  }

  compararTipoDocumento(tipoDocumentoUno: TipoDocumento, tipoDocumentoDos: TipoDocumento): boolean{
    if(tipoDocumentoUno == null || tipoDocumentoDos == null){
      return false;
    }
    return tipoDocumentoUno.idTipoDocumento === tipoDocumentoDos.idTipoDocumento;
 
 }

  

}
