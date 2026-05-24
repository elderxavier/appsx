import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { CasesComponent } from './components/cases/cases.component';
import { ModelsComponent } from './components/models/models.component';
import { FitComponent } from './components/fit/fit.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    MarqueeComponent,
    ServicesComponent,
    ProcessComponent,
    CasesComponent,
    ModelsComponent,
    FitComponent,
    CtaBannerComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );

    const sections = this.host.nativeElement.querySelectorAll('section.appsx-section');
    sections.forEach((s) => this.observer!.observe(s));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
