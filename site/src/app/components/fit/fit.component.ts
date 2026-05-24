import { Component } from '@angular/core';

@Component({
  selector: 'appsx-fit',
  standalone: true,
  templateUrl: './fit.component.html',
})
export class FitComponent {
  readonly goodFit = [
    'Tem regras de negócio complexas que nenhum SaaS resolve.',
    'Está em indústria, fintech, healthtech, logística ou distribuição.',
    'Quer software como ativo proprietário — não como aluguel.',
    'Precisa integrar sistemas legados sem refazer tudo do zero.',
    'Tem orçamento a partir de R$ 80 mil e horizonte de meses, não dias.',
  ];

  readonly badFit = [
    'Procura um MVP de R$ 5 mil entregue na semana que vem.',
    'Quer clonar um app famoso pixel a pixel.',
    'Não tem clareza sobre o problema que quer resolver.',
    'Espera contratar pela hora mais barata do mercado.',
    'Precisa só de um site institucional — recomendamos um designer.',
  ];
}
