import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'appsx-nav',
  standalone: true,
  templateUrl: './nav.component.html',
})
export class NavComponent {
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }
}
