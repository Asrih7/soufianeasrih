import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { SKILLS } from '../../data/portfolio.data';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills">
      <div class="s-lbl" [appReveal]="0"><span class="s-num">02 //</span> Skills &amp; Stack</div>
      <h2 class="s-ttl" [appReveal]="100">My technical<br><em>toolkit.</em></h2>

      <p class="sk-intro" [appReveal]="200">
        10 years of focused Angular architecture, Scrum mastery, mobile hybrid apps with Ionic,
        npm package publishing, and full DevOps tooling.
      </p>

      <!-- Filter buttons -->
      <div class="sk-fs" [appReveal]="250" role="group" aria-label="Filter skills by category">
        @for (cat of categories; track cat) {
          <button class="sf-b hover-el"
                  [class.act]="activeCategory() === cat"
                  (click)="setCategory(cat)">
            {{ cat }}
          </button>
        }
      </div>

      <!-- Skills grid -->
      <div class="sk-g" [appReveal]="300" role="list" aria-label="Skills list">
        @for (skill of filtered(); track skill.name) {
          <div class="sk-p hover-el" [class.hot]="skill.hot" role="listitem">
            <span class="sk-n">{{ skill.name }}</span>
            <span class="sk-y">{{ skill.years }}</span>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    section { overflow: hidden; }
    .sk-intro { font-size: 1.05rem; line-height: 1.82; color: var(--ink2); font-weight: 300; max-width: 520px; margin-bottom: 2.5rem; }
    .sk-fs { display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: 2rem; }
    .sf-b {
      font-family: var(--f3); font-size: .6rem; letter-spacing: .12em; text-transform: uppercase;
      padding: .38rem .82rem; background: transparent; border: 1px solid var(--line);
      color: var(--ink3); border-radius: 2px; transition: all .25s var(--ease);
      &:hover { border-color: var(--ink); color: var(--ink); }
      &.act  { background: var(--ink); color: var(--bg); border-color: var(--ink); }
    }
    .sk-g { display: flex; flex-wrap: wrap; gap: .7rem; min-height: 120px; }
    .sk-p {
      display: flex; align-items: baseline; gap: .6rem;
      padding: .82rem 1.25rem; border: 1px solid var(--line);
      position: relative; overflow: hidden; border-radius: 2px;
      transition: border-color .3s;
      &::before {
        content: ''; position: absolute; inset: 0;
        background: var(--ink); transform: translateY(101%);
        transition: transform .3s var(--ease);
      }
      &:hover::before { transform: none; }
      &:hover .sk-n, &:hover .sk-y { color: var(--bg); }
      &.hot { background: var(--acc); border-color: var(--acc);
        .sk-n, .sk-y { color: #fff; }
        &::before { background: var(--ink); }
      }
    }
    .sk-n { font-size: .84rem; font-weight: 500; position: relative; z-index: 1; transition: color .3s; color: var(--ink); }
    .sk-y { font-family: var(--f3); font-size: .54rem; color: var(--ink3); letter-spacing: .06em; position: relative; z-index: 1; transition: color .3s; }
  `],
})
export class SkillsComponent {
  readonly categories: SkillCategory[] = ['All', 'Frontend', 'Mobile', 'Backend', 'DevOps', 'Architecture'];
  readonly activeCategory = signal<SkillCategory>('All');
  readonly filtered = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All' ? SKILLS : SKILLS.filter(s => s.category === cat);
  });

  setCategory(cat: SkillCategory): void { this.activeCategory.set(cat); }
}
