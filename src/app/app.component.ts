import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tarea';

  array = [
    {nombre: "El Señor de los Anillos", costo: "$ 1200"},
    {nombre: "Juego de Tronos", costo: "$ 694"},
    {nombre: "Harry Potter y la piedra filosofal", costo: "$ 223"},
    {nombre: "Apocalipsis Zombie", costo: "$ 444",},
    {nombre: "Dune", costo: "$ 412"},
    {nombre: "Neuromante", costo: "$ 271"},
  ];

  showList = true;
  toggle = (() => this.showList = !this.showList);
}
