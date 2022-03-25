import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../modelo/entrada';
import { EntradaService } from '../../servicios/entrada/entrada.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-consultar-entradas-salidas',
  templateUrl: './consultar-entradas-salidas.component.html',
  styleUrls: ['./consultar-entradas-salidas.component.css']
})
export class ConsultarEntradasSalidasComponent implements OnInit {

  listadoEntradas: Entrada[] = [];
  

  constructor(private entradaservice: EntradaService) { }
  

  ngOnInit(): void {
    this.entradaservice.listarEntradas().subscribe(
      resp => {
        this.listadoEntradas = resp;
        if(this.listadoEntradas.length===0){
          Swal.fire({
            icon: 'info',
            title: 'Vaya...',
            text: 'Actualmente no hay ningún registro de entradas y salidas',
            footer: ''
          })
         }
        
    }
    );
  }

  

  

}
