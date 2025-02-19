import { Component,Input } from '@angular/core';
import { IBlog } from '../../interfaces/iblog.interface';
@Component({
  selector: 'app-listanoticias',
  imports: [],
  templateUrl: './listanoticias.component.html',
  styleUrl: './listanoticias.component.css'
})
export class ListanoticiasComponent {
  @Input() arrNoticias: IBlog[] = [];
}
