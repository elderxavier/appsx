import { Component } from '@angular/core';

@Component({
  selector: 'appsx-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly stats = [
    { label: 'Em operação', value: '12', unit: 'anos' },
    { label: 'Projetos entregues', value: '147', unit: '+' },
    { label: 'Linhas em produção', value: '2.8', unit: 'M' },
    { label: 'NPS médio', value: '87', unit: '' },
  ];
}
