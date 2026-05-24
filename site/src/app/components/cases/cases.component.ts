import { Component } from '@angular/core';

interface Case {
  tag: string;
  title: string;
  metric: string;
  label: string;
}

@Component({
  selector: 'appsx-cases',
  standalone: true,
  templateUrl: './cases.component.html',
})
export class CasesComponent {
  readonly cases: Case[] = [
    { tag: 'Indústria · ERP custom', title: 'Plataforma de gestão fabril para fornecedora do setor automotivo.', metric: '−73%', label: 'no tempo de fechamento contábil mensal' },
    { tag: 'Fintech · App + API', title: 'App de antecipação de recebíveis com motor de score proprietário.', metric: 'R$ 480M', label: 'processados no primeiro ano de operação' },
    { tag: 'Healthtech · Portal', title: 'Portal de prontuário eletrônico integrado para rede hospitalar.', metric: '12s → 1s', label: 'no tempo médio de busca por paciente' },
    { tag: 'Logística · Integração', title: 'Middleware unificando 9 transportadoras em uma única API.', metric: '99,97%', label: 'de uptime ao longo de 36 meses contínuos' },
  ];
}
