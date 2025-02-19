import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
// Se define el formulario del blog
formNoticias: FormGroup;


constructor() {
  // Inicializamos el formulario con los campos requeridos
  this.formNoticias = new FormGroup({
    tituloNoticia: new FormControl('', [Validators.required, Validators.minLength(5)]),
    imagenNoticia: new FormControl('', [Validators.required, Validators.pattern('^https?:\/\/.*\.(jpg|jpeg|png|webp)$')]), 
    textoNoticia: new FormControl('', [Validators.required, Validators.minLength(15)]),
    fechaNoticia: new FormControl('', [Validators.required])
  }); 
}
}