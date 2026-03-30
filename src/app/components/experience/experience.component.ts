import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { EXPERIENCES } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="exp">
      <div class="s-lbl" [appReveal]="0"><span class="s-num">03 //</span> Experience</div>
      <h2 class="s-ttl" [appReveal]="100">Where I've<br><em>made an impact.</em></h2>

      <div class="ex-list">
        @for (exp of experiences; track exp.id) {
          <div class="ex-item hover-el"
               [class.open]="openId() === exp.id"
               [appReveal]="exp.id * 50"
               (click)="toggle(exp.id)">

            <!-- Left column -->
            <div class="ex-l">
              <img class="ex-logo" [src]="exp.logo" [alt]="exp.company" width="110" height="36" loading="lazy"/>
              <div class="ex-co">{{ exp.company }}</div>
              <div class="ex-dt">{{ exp.date }}</div>
              <div class="ex-bg">{{ exp.badge }}</div>
              <span class="ex-nm">{{ exp.id | number:'2.0-0' }}</span>
            </div>

            <!-- Right column -->
            <div class="ex-r">
              <div class="ex-hd">
                <div class="ex-role">{{ exp.role }}</div>
                <div class="ex-tgl" [attr.aria-expanded]="openId() === exp.id">
                  {{ openId() === exp.id ? 'Less' : 'More' }}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>

              <ul class="ex-pts" [class.vis]="openId() === exp.id" role="list">
                @for (pt of exp.points; track $index) {
                  <li>{{ pt }}</li>
                }
              </ul>

              <div class="ex-tags" [class.vis]="openId() === exp.id">
                @for (tag of exp.tags; track tag) {
                  <span class="ex-tag">{{ tag }}</span>
                }
              </div>
            </div>

          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--bg2); }
    .ex-list { margin-top: 4rem; }
    .ex-item {
      display: grid; grid-template-columns: 190px 1fr; gap: 3rem;
      padding: 2.5rem 0; border-top: 1px solid var(--line); transition: background .2s;
      &:last-child { border-bottom: 1px solid var(--line); }
      &:hover { background: rgba(var(--acc-rgb), .02); }
    }
    .ex-l { display: flex; flex-direction: column; }
    .ex-logo { width: 110px; height: 36px; object-fit: contain; margin-bottom: .8rem; opacity: .85; }
    [data-theme=dark] .ex-logo { filter: brightness(1.3) saturate(.8); }
    .ex-co { font-family: var(--f1); font-size: 1rem; font-weight: 600; margin-bottom: .25rem; color: var(--ink); }
    .ex-dt { font-family: var(--f3); font-size: .59rem; color: var(--ink3); letter-spacing: .1em; text-transform: uppercase; margin-bottom: .6rem; }
    .ex-bg { display: inline-block; font-family: var(--f3); font-size: .54rem; letter-spacing: .08em; text-transform: uppercase; padding: .18rem .52rem; background: var(--acc-l); color: var(--acc); border: 1px solid rgba(var(--acc-rgb),.2); border-radius: 1px; width: fit-content; }
    .ex-nm { font-family: var(--f1); font-size: 3rem; font-weight: 300; color: var(--line); margin-top: auto; text-align: right; line-height: 1; transition: color .3s; letter-spacing: -.02em; align-self: flex-end; }
    .ex-item:hover .ex-nm { color: rgba(var(--acc-rgb), .18); }
    .ex-r {}
    .ex-hd { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; gap: 1rem; }
    .ex-role { font-family: var(--f1); font-size: 1.45rem; font-weight: 300; letter-spacing: -.02em; color: var(--ink); }
    .ex-tgl { font-family: var(--f3); font-size: .56rem; color: var(--ink3); letter-spacing: .1em; text-transform: uppercase; display: flex; align-items: center; gap: .35rem; flex-shrink: 0; padding-top: .4rem;
      svg { transition: transform .35s var(--ease); }
    }
    .ex-item.open .ex-tgl svg { transform: rotate(180deg); }
    .ex-pts { max-height: 0; overflow: hidden; transition: max-height .55s var(--ease); display: flex; flex-direction: column; gap: .5rem;
      &.vis { max-height: 500px; }
      li { font-size: .86rem; line-height: 1.72; color: var(--ink2); list-style: none; display: flex; gap: .65rem; font-weight: 300;
        &::before { content: '→'; color: var(--acc); flex-shrink: 0; font-size: .7rem; margin-top: .18em; }
      }
    }
    .ex-tags { display: flex; flex-wrap: wrap; gap: .38rem; margin-top: 1rem; max-height: 0; overflow: hidden; transition: max-height .55s var(--ease); &.vis { max-height: 80px; } }
    .ex-tag { font-family: var(--f3); font-size: .53rem; letter-spacing: .06em; padding: .2rem .48rem; border: 1px solid var(--line); color: var(--ink3); border-radius: 1px; }
    @media (max-width: 900px) { .ex-item { grid-template-columns: 1fr; gap: 1rem; } .ex-nm { display: none; } }
  `],
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCES;
  readonly openId = signal<number | null>(null);
  toggle(id: number): void { this.openId.update(v => v === id ? null : id); }
}
