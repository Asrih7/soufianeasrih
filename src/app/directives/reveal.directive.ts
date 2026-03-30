import { Directive, ElementRef, Input, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') delay = 0;

  private el         = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = this.el.nativeElement;
    el.classList.add('rv');
    if (this.delay) el.style.transitionDelay = `${this.delay}ms`;

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { el.classList.add('on'); this.observer.unobserve(el); }
      });
    }, { threshold: 0.1 });
    this.observer.observe(el);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
