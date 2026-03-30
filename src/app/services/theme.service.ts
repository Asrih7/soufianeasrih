import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  readonly theme = signal<Theme>(this.getInitial());

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.setAttribute('data-theme', this.theme());
        try { localStorage.setItem('pf-theme', this.theme()); } catch {}
      }
    });
  }

  toggle(): void { this.theme.update(t => t === 'light' ? 'dark' : 'light'); }

  private getInitial(): Theme {
    if (!isPlatformBrowser(this.platformId)) return 'light';
    try {
      const stored = localStorage.getItem('pf-theme') as Theme | null;
      if (stored) return stored;
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
