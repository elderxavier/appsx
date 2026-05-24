import { Component } from '@angular/core';

@Component({
  selector: 'appsx-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly empresa = [
    { label: 'Sobre nós', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Blog técnico', href: '#' },
    { label: 'Manifesto', href: '#' },
  ];

  readonly servicos = [
    { label: 'Web sob medida', href: '#' },
    { label: 'Apps mobile', href: '#' },
    { label: 'Integrações', href: '#' },
    { label: 'Sustentação', href: '#' },
  ];

  readonly contato = [
    { label: 'contato@appsx.com.br', href: 'mailto:contato@appsx.com.br' },
    { label: '+55 11 9 0000-0000', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ];
}
