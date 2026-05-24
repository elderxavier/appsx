import { Component } from '@angular/core';

@Component({
  selector: 'appsx-marquee',
  standalone: true,
  templateUrl: './marquee.component.html',
})
export class MarqueeComponent {
  readonly items = [
    'Sistemas web sob medida',
    'Aplicativos mobile',
    'Integrações e APIs',
    'Automação RPA',
    'Arquitetura em nuvem',
    'Sustentação evolutiva',
  ];
}
