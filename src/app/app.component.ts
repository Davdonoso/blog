import { Component } from '@angular/core';
import { FormularioComponent } from "./components/formulario/formulario.component";
import { ListanoticiasComponent } from "./components/listanoticias/listanoticias.component";
import { IBlog } from './interfaces/iblog.interface';
@Component({
  selector: 'app-root',
  imports: [ FormularioComponent, ListanoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // Array de Noticias muestra
 
 arrNoticias: IBlog[]= [
  {titulo:"Yamaha XMax 125", imagen:"https://blog.mundimoto.com/wp-content/uploads/2023/08/Numero__Nombre-del-articulo__Imagen_Blog-980x613.jpg",textoNoticia:"¿Estás buscando una moto con estilo, potencia y maniobrabilidad? La Yamaha TMAX es una excelente opción. Esta moto deportiva y elegante es una de las más populares en su categoría, y con razón. Si estás buscando una moto que te permita disfrutar del paseo y llegar al destino con estilo, sigue leyendo. En este artículo, te presentaremos todas las características y detalles de la Yamaha TMAX.",fechaPublicacion:'2023-01-28'},
  {titulo:"Honda SH 300", imagen:"https://blog.mundimoto.com/wp-content/uploads/2023/07/Numero__Nombre-del-articulo__Imagen_Blog-980x613.jpg",textoNoticia:"Si eres un amante de las dos ruedas y te gusta sentir la velocidad entonces la moto Honda Sh 300 es una opción que no puedes pasar por alto. En esta ocasión, te presentaremos todo lo que necesitas saber sobre este modelo para que puedas decidir si es la moto perfecta para ti.", fechaPublicacion:'2023-02-28'},
 ]
}
