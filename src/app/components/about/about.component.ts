import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about">
      <div class="s-lbl" [appReveal]="0"><span class="s-num">01 //</span> About</div>
      <h2 class="s-ttl" [appReveal]="100">The person<br><em>behind the code.</em></h2>

      <div class="ab-g">
        <!-- Text column -->
        <div>
          <p class="ab-p" [appReveal]="100">
            I'm <strong>Soufiane Asrih</strong>, an <span class="hi">Expert Frontend Architect &amp; Scrum Master</span>
            based in Tétouan, Morocco. With 10+ years I've led frontend development for global enterprises —
            from <strong>Allianz Spain</strong> to <strong>Banco Sabadell</strong> and
            <strong>MAPFRE Madrid</strong> — currently at <strong>NTT DATA Morocco</strong>.
          </p>
          <p class="ab-p" [appReveal]="200">
            I architect Angular applications that scale. I care deeply about component reusability,
            reactive state with RxJS &amp; Signals, Scrum leadership, and the craftsmanship that makes a
            codebase a pleasure six months later. I hold <span class="hi">16K+ LinkedIn connections</span>
            in the Angular ecosystem.
          </p>
          <p class="ab-p" [appReveal]="300">
            In 2023 I founded <span class="hi">SA7Tech</span> — my studio for mobile apps, npm packages,
            and freelance solutions. I've published <span class="hi">4 npm packages</span> used by the Angular
            community and write on Medium about Angular best practices.
          </p>

          <div class="facts" [appReveal]="400">
            @for (f of facts; track f.key) {
              <div class="fact">
                <span class="fk">{{ f.key }}</span>
                <span class="fv">
                  @if (f.href) { <a [href]="f.href" [target]="f.external ? '_blank' : '_self'" rel="noopener">{{ f.value }}</a> }
                  @else        { {{ f.value }} }
                </span>
              </div>
            }
          </div>
        </div>

        <!-- Aside column -->
        <div>
          <div class="aside-col">
            <!-- Profile photo -->
            <div class="p-frame" [appReveal]="0">
              <img src="assets/profile/soufiane.jpg" alt="Soufiane Asrih — Senior Angular Developer"/>
              <div class="p-ov">
              </div>
            </div>

            <!-- Availability badge -->
            <div class="av-card" [appReveal]="100">
              <div class="av-dot" aria-hidden="true"></div>
              <div class="av-txt">
                <b>Available for new opportunities</b><br>
                Senior Angular roles &amp; select freelance
              </div>
            </div>

            <!-- Languages -->
            <div class="a-card" [appReveal]="200">
              <h3>Languages</h3>
              @for (l of languages; track l.name) {
                <div class="l-row">
                  <div class="l-name">{{ l.name }}</div>
                  <div class="l-lvl">{{ l.level }}</div>
                  <div class="dots">
                    @for (i of [1,2,3,4,5]; track i) {
                      <div class="dot" [class.on]="i <= l.dots"></div>
                    }
                  </div>
                </div>
              }
            </div>

            <!-- Education -->
            <div class="a-card" [appReveal]="300">
              <div class="edu-l">Education</div>
              <div class="edu-t">Diplôme Technicien Spécialisé<br>en Développement Informatique</div>
              <div class="edu-m">ISMONTIC / ISTA · Tétouan · 2012–2014</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--bg2); }
    .ab-g { display: grid; grid-template-columns: 55fr 42fr; gap: 7rem; align-items: start; margin-top: 4rem; }
    .ab-p { font-size: 1.08rem; line-height: 1.88; color: var(--ink2); margin-bottom: 1.6rem; font-weight: 300;
      strong { color: var(--ink); font-weight: 500; } }
    .hi { color: var(--acc); }
    .facts { margin-top: 2.5rem; border-top: 1px solid var(--line); }
    .fact { display: flex; gap: 1.5rem; padding: .85rem 0; border-bottom: 1px solid var(--line); align-items: baseline; }
    .fk { font-family: var(--f3); font-size: .59rem; color: var(--ink3); letter-spacing: .14em; text-transform: uppercase; min-width: 88px; flex-shrink: 0; }
    .fv { color: var(--ink2); font-size: .88rem; a { color: var(--acc); text-decoration: none; &:hover { text-decoration: underline; } } }
    /* Photo */
    .p-frame { width: 100%; padding-top: 115%; position: relative; border-radius: 2px; overflow: hidden; border: 1px solid var(--line); box-shadow: var(--sh2); background: var(--bg3); }
    .p-frame img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
    .p-ov { position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5rem 2rem; background: linear-gradient(0deg, rgba(11,11,9,.82), transparent); }
    .p-nm { font-family: var(--f1); font-size: 1.4rem; font-weight: 600; color: #fff; letter-spacing: -.01em; }
    .p-role { font-family: var(--f3); font-size: .58rem; color: rgba(255,255,255,.68); letter-spacing: .14em; text-transform: uppercase; margin-top: .2rem; }
    /* Aside */
    .aside-col { display: flex; flex-direction: column; gap: 1.5rem; position: sticky; top: 8rem; }
    .av-card { padding: 1.4rem; border: 1px solid rgba(var(--acc-rgb),.2); background: var(--acc-l); border-radius: 2px; display: flex; align-items: center; gap: .85rem; }
    .av-dot { width: 9px; height: 9px; border-radius: 50%; background: #2ecc71; flex-shrink: 0; animation: pu 2.2s infinite; }
    @keyframes pu { 0%,100% { box-shadow: 0 0 0 0 rgba(46,204,113,.45); } 60% { box-shadow: 0 0 0 7px rgba(46,204,113,0); } }
    .av-txt { font-family: var(--f3); font-size: .62rem; color: var(--ink2); letter-spacing: .1em; text-transform: uppercase; line-height: 1.5; b { color: var(--acc); font-weight: 500; } }
    .a-card { background: var(--bg); border: 1px solid var(--line); padding: 2rem; border-radius: 2px; box-shadow: var(--sh); h3 { font-family: var(--f1); font-size: 1.35rem; font-weight: 300; margin-bottom: 1.5rem; } }
    .l-row { padding: .65rem 0; border-bottom: 1px solid var(--line); &:last-child { border: none; } }
    .l-name { font-weight: 500; font-size: .86rem; margin-bottom: .2rem; }
    .l-lvl { font-family: var(--f3); font-size: .58rem; color: var(--ink3); letter-spacing: .07em; text-transform: uppercase; margin-bottom: .35rem; }
    .dots { display: flex; gap: 4px; }
    .dot { width: 20px; height: 3px; border-radius: 1px; background: var(--line); &.on { background: var(--acc); } }
    .edu-l { font-family: var(--f3); font-size: .57rem; color: var(--acc); letter-spacing: .18em; text-transform: uppercase; margin-bottom: .7rem; }
    .edu-t { font-family: var(--f1); font-size: 1rem; line-height: 1.4; margin-bottom: .35rem; }
    .edu-m { font-family: var(--f3); font-size: .6rem; color: var(--ink3); letter-spacing: .06em; }
    @media (max-width: 900px) { .ab-g { grid-template-columns: 1fr; gap: 3rem; } .aside-col { position: static; } }
  `],
})
export class AboutComponent {
  readonly facts = [
    { key: 'Location',    value: 'Tétouan, Morocco 🇲🇦' },
    { key: 'Email',       value: 'asrihsoufiane@gmail.com', href: 'mailto:asrihsoufiane@gmail.com' },
    { key: 'Phone',       value: '+212 677 604 950',        href: 'tel:+212677604950' },
    { key: 'LinkedIn',    value: 'soufiane-asrih-274303125', href: 'https://linkedin.com/in/soufiane-asrih-274303125', external: true },
    { key: 'GitHub',      value: 'github.com/Asrih7 (23 repos)', href: 'https://github.com/Asrih7', external: true },
    { key: 'Medium',      value: '@asrihsoufiane', href: 'https://medium.com/@asrihsoufiane', external: true },
    { key: 'npm',         value: '4 published packages', href: 'https://www.npmjs.com/~asrih7', external: true },
    { key: 'DOB',         value: '27 March 1993 · Casablanca' },
  ];

  readonly languages = [
    { name: 'Arabic',  level: 'Native',           dots: 5 },
    { name: 'Spanish', level: 'C1 — Professional', dots: 4 },
    { name: 'French',  level: 'B2/C2 — Advanced',  dots: 4 },
    { name: 'English', level: 'B1 — Intermediate', dots: 3 },
  ];
}
