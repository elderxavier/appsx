import { Component } from '@angular/core';

interface Model {
  badge?: string;
  featured?: boolean;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'appsx-models',
  standalone: true,
  templateUrl: './models.component.html',
})
export class ModelsComponent {
  readonly models: Model[] = [
    {
      badge: 'Mais procurado',
      title: 'Projeto fechado',
      description: 'Escopo definido com prazo e preço fixos. Ideal para iniciativas com requisitos claros.',
      features: ['Orçamento previsível', 'Cronograma garantido', 'Equipe alocada por fase', 'Entrega contra escopo'],
    },
    {
      featured: true,
      title: 'Squad dedicado',
      description: 'Time multidisciplinar alocado mensalmente, dedicado ao seu roadmap evolutivo.',
      features: ['Dev, QA, PO e tech lead', 'Cerimônias quinzenais', 'Prioridades dinâmicas', 'Renovação trimestral'],
    },
    {
      title: 'Sustentação & evolução',
      description: 'Manutenção contínua e evolução de sistemas existentes — seus ou herdados de terceiros.',
      features: ['SLA por severidade', 'Banco de horas mensal', 'Plantão crítico opcional', 'Refactoring planejado'],
    },
  ];
}
