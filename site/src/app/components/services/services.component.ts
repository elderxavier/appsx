import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  stack: string[];
}

@Component({
  selector: 'appsx-services',
  standalone: true,
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly services: Service[] = [
    {
      icon: '{ }',
      title: 'Sistemas web sob medida',
      description: 'ERPs internos, portais corporativos, back-offices, dashboards operacionais e plataformas SaaS para o seu nicho.',
      stack: ['Node', '.NET', 'Python', 'React', 'Next.js'],
    },
    {
      icon: '▢',
      title: 'Aplicativos mobile',
      description: 'Apps nativos ou cross-platform com integração ao seu back-end. iOS e Android publicados nas stores com suporte contínuo.',
      stack: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    },
    {
      icon: '⇄',
      title: 'Integrações & automações',
      description: 'APIs, RPA, ETLs e middleware para conectar seu ERP legado, marketplaces, gateways e sistemas terceirizados.',
      stack: ['REST', 'GraphQL', 'RabbitMQ', 'Airflow', 'UiPath'],
    },
  ];
}
