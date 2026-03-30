import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cur" #cur>
      <div class="cur__dot"></div>
      <div class="cur__ring"></div>
    </div>
  `,
  styles: [`
    .cur { position: fixed; top: 0; left: 0; z-index: 9999; pointer-events: none; }
    .cur__dot {
      width: 9px; height: 9px; background: var(--acc); border-radius: 50%;
      position: absolute; transform: translate(-50%,-50%);
      transition: transform .1s;
    }
    .cur__ring {
      width: 34px; height: 34px;
      border: 1.5px solid var(--acc); border-radius: 50%;
      position: absolute; transform: translate(-50%,-50%); opacity: .4;
      transition: width .32s var(--ease), height .32s var(--ease), opacity .32s;
    }
    :host-context(body.cur-big) .cur__ring { width: 56px; height: 56px; opacity: .18; }
    :host-context(body.cur-big) .cur__dot  { transform: translate(-50%,-50%) scale(.35); }
  `],
})
export class CursorComponent implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private dot!: HTMLElement;
  private ring!: HTMLElement;
  private mx = 0; private my = 0;
  private rx = 0; private ry = 0;
  private animId = 0;
  private cleanups: (() => void)[] = [];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.dot  = document.querySelector('.cur__dot')  as HTMLElement;
    this.ring = document.querySelector('.cur__ring') as HTMLElement;

    const onMove = (e: MouseEvent) => {
      this.mx = e.clientX; this.my = e.clientY;
      this.dot.style.left = this.mx + 'px'; this.dot.style.top = this.my + 'px';
    };
    document.addEventListener('mousemove', onMove);
    this.cleanups.push(() => document.removeEventListener('mousemove', onMove));

    const onEnter = () => document.body.classList.add('cur-big');
    const onLeave = () => document.body.classList.remove('cur-big');
    const bind = () => {
      document.querySelectorAll('a, button, .hover-el').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    bind();
    // Re-bind after dynamic content renders
    [500, 1500].forEach(ms => setTimeout(bind, ms));

    const loop = () => {
      this.rx += (this.mx - this.rx) * 0.1;
      this.ry += (this.my - this.ry) * 0.1;
      this.ring.style.left = this.rx + 'px';
      this.ring.style.top  = this.ry + 'px';
      this.animId = requestAnimationFrame(loop);
    };
    loop();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    this.cleanups.forEach(fn => fn());
  }
}
