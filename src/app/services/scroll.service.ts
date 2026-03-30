import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private platformId = inject(PLATFORM_ID);

  readonly progress     = signal(0);
  readonly isScrolled   = signal(false);
  readonly activeSection = signal('hero');
  readonly showBtt      = signal(false);

  private sections = ['hero', 'about', 'skills', 'exp', 'packages', 'certs', 'writing', 'contact'];

  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const handler = () => {
      const s = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      this.progress.set(h > 0 ? Math.min(s / h, 1) : 0);
      this.isScrolled.set(s > 80);
      this.showBtt.set(s > 500);

      for (let i = this.sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(this.sections[i]);
        if (el && s >= el.offsetTop - 220) {
          this.activeSection.set(this.sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handler, { passive: true });
  }

  scrollTo(id: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
