import { Component, ChangeDetectionStrategy, signal, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <div class="loader" [class.out]="hiding()">
        <div class="loader__name" aria-hidden="true">
          @for (l of letters; track $index) {
            <span [style.animation-delay]="($index * 55 + 60) + 'ms'">{{ l }}</span>
          }
        </div>
        <div class="loader__bar"><div class="loader__fill" [style.width]="pct() + '%'"></div></div>
        <div class="loader__pct">{{ pct() }}%</div>
      </div>
    }
  `,
  styles: [`
    .loader {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--bg);
      display: flex; align-items: center; justify-content: center;
      flex-direction: column; gap: 1.8rem;
      transition: opacity .65s var(--ease), visibility .65s;
    }
    .loader.out { opacity: 0; visibility: hidden; pointer-events: none; }
    .loader__name {
      font-family: var(--f1);
      font-size: clamp(3.5rem, 11vw, 8rem);
      font-weight: 300; letter-spacing: -.03em; overflow: hidden; line-height: 1;
    }
    .loader__name span {
      display: inline-block; opacity: 0; transform: translateY(115%);
      animation: sup .9s var(--ease) forwards;
    }
    @keyframes sup { to { opacity: 1; transform: none; } }
    .loader__bar { width: 200px; height: 1px; background: var(--line); overflow: hidden; }
    .loader__fill { height: 100%; background: var(--acc); transition: width .1s linear; }
    .loader__pct { font-family: var(--f3); font-size: .6rem; color: var(--ink3); letter-spacing: .22em; }
  `],
})
export class LoaderComponent implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  readonly letters   = 'Soufiane'.split('');
  readonly pct       = signal(0);
  readonly visible   = signal(true);
  readonly hiding    = signal(false);
  private interval!: ReturnType<typeof setInterval>;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.interval = setInterval(() => {
      this.pct.update(v => { const n = Math.min(v + Math.random() * 18, 99); return Math.floor(n); });
      if (this.pct() >= 99) clearInterval(this.interval);
    }, 80);
    if (document.readyState === 'complete') { setTimeout(() => this.done(), 300); }
    else window.addEventListener('load', () => this.done(), { once: true });
  }

  private done(): void {
    this.pct.set(100);
    clearInterval(this.interval);
    setTimeout(() => this.hiding.set(true), 450);
    setTimeout(() => this.visible.set(false), 1150);
  }

  ngOnDestroy(): void { clearInterval(this.interval); }
}
