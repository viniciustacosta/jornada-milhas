import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  standalone: false,
  templateUrl: './card-depoimento.html',
  styleUrl: './card-depoimento.scss'
})
export class CardDepoimento {
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mariana Faustino'
}
