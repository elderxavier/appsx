import { Component } from '@angular/core';

interface ProcessStep {
  num: string;
  name: string;
  description: string;
  duration: string;
}

@Component({
  selector: 'appsx-process',
  standalone: true,
  templateUrl: './process.component.html',
})
export class ProcessComponent {
  readonly steps: ProcessStep[] = [
    { num: '01', name: 'Discovery', description: 'Imersão no negócio, mapeamento de processos e definição de escopo.', duration: '1 — 2 semanas' },
    { num: '02', name: 'Arquitetura', description: 'Desenho técnico, escolha de stack e prototipação de fluxos críticos.', duration: '2 semanas' },
    { num: '03', name: 'Sprints quinzenais', description: 'Desenvolvimento iterativo com entregas validáveis a cada 14 dias.', duration: '8 — 24 semanas' },
    { num: '04', name: 'Homologação', description: 'UAT com seu time, ajustes finais, treinamento e go-live assistido.', duration: '2 — 3 semanas' },
    { num: '05', name: 'Sustentação', description: 'Monitoramento, manutenção evolutiva e SLA de suporte contínuo.', duration: 'Mensal' },
  ];
}
