import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IBlog } from '../../interfaces/iblog.interface';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
// Se define el formulario del blog
formNoticias: FormGroup;
// Emitimos los datos del formulario
@Output() noticiaemitida = new EventEmitter<IBlog>(); // Evento para enviar la noticia al padre

constructor() {
  // Inicializamos el formulario con los campos requeridos
  this.formNoticias = new FormGroup({
    tituloNoticia: new FormControl('', [Validators.required, Validators.minLength(5)]),
    imagenNoticia: new FormControl('', [Validators.required, Validators.pattern('^https?:\/\/.*\.(jpg|jpeg|png|webp)$')]), 
    textoNoticia: new FormControl('', [Validators.required, Validators.minLength(15)]),
    fechaNoticia: new FormControl('', [Validators.required])
  }); 
}

// Función para guardar los datos del formulario
guardar() {
  if (this.formNoticias.valid) {
    const nuevaNoticia: IBlog = {
      titulo: this.formNoticias.value.tituloNoticia,
      imagen: this.formNoticias.value.imagenNoticia,
      textoNoticia: this.formNoticias.value.textoNoticia,
      fechaPublicacion: this.formNoticias.value.fechaNoticia
    };

    this.noticiaemitida.emit(nuevaNoticia); // Emitimos la noticia al componente padre
    this.formNoticias.reset(); // Limpiamos el formulario
    
}
}
}