import { Component, OnInit } from '@angular/core';
import { ApiDatosService } from '../../Services/api-datos.service';
import { Formulario } from '../../models/formulario.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrl: './contacto-component.component.css'
})
export class ContactoComponentComponent implements OnInit{

  constructor(private router:Router,private route:ActivatedRoute,private datosService:ApiDatosService){}
  
  ngOnInit(): void {
    
  }

  enviarFormulario(){
    let miFormulario= new Formulario(this.cuadroNombre,this.cuadroCorreo,this.cuadroTitulo,this.cuadroMensaje);
    this.datosService.guardarFormularios(miFormulario);
    this.cuadroNombre="";
    this.cuadroCorreo="";
    this.cuadroTitulo="";
    this.cuadroMensaje="";
    this.router.navigate(['/contacto']);

  }
  cuadroNombre:string="";
  cuadroCorreo:string="";
  cuadroTitulo:string="";
  cuadroMensaje:string="";
}
