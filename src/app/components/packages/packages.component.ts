import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PACKAGES } from '../../data/portfolio.data';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="packages">
      <div class="s-lbl" [appReveal]="0"><span class="s-num">04 //</span> npm Packages &amp; Open Source</div>
      <h2 class="s-ttl" [appReveal]="100">Things I've<br><em>built &amp; shipped.</em></h2>

      <div class="pk-g">
        @for (pkg of packages; track pkg.title; let i = $index) {
          <div class="pk-c hover-el" [appReveal]="(i % 2) * 150 + 100">
            <img class="pk-img" [src]="pkg.image" [alt]="pkg.title + ' preview'" loading="lazy"/>
            <div class="pk-body">
              <div class="pk-type">{{ pkg.type }}</div>
              <div class="pk-ttl">{{ pkg.title }}</div>
              <div class="pk-desc">{{ pkg.description }}</div>
              <div class="pk-links">
                @for (lk of pkg.links; track lk.label) {
                  <a class="pk-lk hover-el" [href]="lk.url" target="_blank" rel="noopener">{{ lk.label }}</a>
                }
              </div>
              <div class="pk-tags">
                @for (tag of pkg.tags; track tag) {
                  <span class="pk-tag">{{ tag }}</span>
                }
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Angular Training Academy banner -->
      <div class="academy-card hover-el" [appReveal]="200">
        <div class="ac-left">
          <div class="pk-type">Platform · Angular · Learning</div>
          <div class="ac-ttl">Angular Training Academy</div>
          <div class="ac-desc">Comprehensive Angular learning platform — RxJS, NgRx, Signals, Universal SSR, security, and deployment. Live on GitHub Pages.</div>
          <div class="pk-links" style="margin-top:1rem">
            <a class="pk-lk hover-el" href="https://asrih7.github.io/AsrihAngularAcademy/" target="_blank" rel="noopener">Live Demo ↗</a>
            <a class="pk-lk hover-el" href="https://github.com/Asrih7/AsrihAngularAcademy" target="_blank" rel="noopener">GitHub ↗</a>
          </div>
        </div>
        <div class="pk-tags" style="flex-shrink:0;align-self:center">
          <span class="pk-tag">Angular 17</span>
          <span class="pk-tag">RxJS</span>
          <span class="pk-tag">NgRx</span>
          <span class="pk-tag">Signals</span>
          <span class="pk-tag">GitHub Pages</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { overflow: hidden; }
    .pk-g { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; margin-top: 4rem; }
    .pk-c { border: 1px solid var(--line); border-radius: 2px; overflow: hidden; background: var(--bg2); transition: transform .3s var(--ease), border-color .3s, box-shadow .3s; position: relative;
      &:hover { transform: translateY(-4px); border-color: rgba(var(--acc-rgb),.35); box-shadow: var(--sh2); }
    }
    .pk-img { width: 100%; height: 200px; object-fit: cover; background: var(--bg3); display: block; }
    .pk-body { padding: 1.8rem; }
    .pk-type { font-family: var(--f3); font-size: .57rem; color: var(--acc); letter-spacing: .18em; text-transform: uppercase; margin-bottom: .9rem; }
    .pk-ttl { font-family: var(--f1); font-size: 1.4rem; font-weight: 400; letter-spacing: -.02em; margin-bottom: .6rem; color: var(--ink); line-height: 1.1; }
    .pk-desc { font-size: .87rem; line-height: 1.75; color: var(--ink2); font-weight: 300; margin-bottom: 1.2rem; }
    .pk-links { display: flex; gap: 1rem; flex-wrap: wrap; }
    .pk-lk { font-family: var(--f3); font-size: .6rem; letter-spacing: .1em; text-transform: uppercase; color: var(--acc); text-decoration: none; display: flex; align-items: center; gap: .35rem; transition: gap .25s; border-bottom: 1px solid rgba(var(--acc-rgb),.3); padding-bottom: 1px;
      &:hover { gap: .6rem; }
    }
    .pk-tags { display: flex; flex-wrap: wrap; gap: .38rem; margin-top: .9rem; }
    .pk-tag { font-family: var(--f3); font-size: .52rem; padding: .18rem .48rem; border: 1px solid var(--line); color: var(--ink3); border-radius: 1px; }
    /* Academy banner */
    .academy-card { margin-top: 1.5rem; border: 1px solid var(--line); padding: 2.5rem; border-radius: 2px; display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 2rem; background: var(--bg2); transition: border-color .3s, box-shadow .3s;
      &:hover { border-color: rgba(var(--acc-rgb),.35); box-shadow: var(--sh2); }
    }
    .ac-ttl { font-family: var(--f1); font-size: 1.55rem; font-weight: 400; color: var(--ink); margin-bottom: .6rem; letter-spacing: -.02em; }
    .ac-desc { font-size: .87rem; line-height: 1.75; color: var(--ink2); font-weight: 300; max-width: 520px; }
    @media (max-width: 900px) { .pk-g { grid-template-columns: 1fr; } .academy-card { flex-direction: column; } }
  `],
})
export class PackagesComponent {
  readonly packages = PACKAGES;
}
