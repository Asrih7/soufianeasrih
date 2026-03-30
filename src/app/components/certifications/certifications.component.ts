import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { CERTIFICATIONS } from '../../data/portfolio.data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="certs">
      <div class="s-lbl" [appReveal]="0"><span class="s-num">05 //</span> Certifications &amp; Expertise</div>
      <h2 class="s-ttl" [appReveal]="100">Validated<br><em>expertise.</em></h2>

      <div class="cert-g">
        @for (cert of certs; track cert.name; let i = $index) {
          <div class="cert-c hover-el" [appReveal]="i * 100 + 100">
            <img class="cert-img" [src]="cert.image" [alt]="cert.name + ' badge'" loading="lazy"/>
            <div class="cert-name">{{ cert.name }}</div>
            <div class="cert-org">{{ cert.org }}</div>
            <div class="cert-desc">{{ cert.description }}</div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--bg2); }
    .cert-g { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; margin-top: 4rem; }
    .cert-c {
      display: flex; flex-direction: column; align-items: center; text-align: center;
      padding: 2.5rem 1.5rem;
      border: 1px solid var(--line); background: var(--bg); border-radius: 2px;
      position: relative; overflow: hidden;
      transition: transform .3s var(--ease), border-color .3s, box-shadow .3s;
      &::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(var(--acc-rgb),.04), transparent); opacity: 0; transition: opacity .3s; }
      &:hover { transform: translateY(-4px); border-color: rgba(var(--acc-rgb),.35); box-shadow: var(--sh2); &::before { opacity: 1; } }
    }
    .cert-img { width: 100px; height: 100px; object-fit: contain; margin-bottom: 1.5rem; }
    .cert-name { font-family: var(--f1); font-size: 1.15rem; font-weight: 400; margin-bottom: .5rem; color: var(--ink); line-height: 1.25; }
    .cert-org { font-family: var(--f3); font-size: .6rem; color: var(--acc); letter-spacing: .14em; text-transform: uppercase; margin-bottom: .75rem; }
    .cert-desc { font-size: .82rem; color: var(--ink2); font-weight: 300; line-height: 1.65; }
    @media (max-width: 1100px) { .cert-g { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 600px)  { .cert-g { grid-template-columns: 1fr; } }
  `],
})
export class CertificationsComponent {
  readonly certs = CERTIFICATIONS;
}
