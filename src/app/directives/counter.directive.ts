import { Directive, ElementRef, Input, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[appCounter]', standalone: true })
export class CounterDirective implements OnInit {
  @Input('appCounter') target   = 0;
  @Input() suffix                = '';
  @Input() duration              = 1800;

  private el         = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.textContent = this.target + this.suffix;
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { this.run(); observer.disconnect(); }
    }, { threshold: 0.5 });
    observer.observe(this.el.nativeElement);
  }

  private run(): void {
    const t0  = performance.now();
    const el  = this.el.nativeElement;
    const step = (now: number) => {
      const p = Math.min((now - t0) / this.duration, 1);
      const v = Math.floor((1 - Math.pow(1 - p, 3)) * this.target);
      el.textContent = v + this.suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
