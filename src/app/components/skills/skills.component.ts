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
    .sk-g { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-top: 2rem; }
    .sk-p {
      display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start;
      padding: 1.5rem; border: 1px solid var(--line); background: var(--bg2);
      position: relative; overflow: hidden; border-radius: 2px; min-height: 140px;
      transition: all .3s var(--ease);
      &::before {
        content: ''; position: absolute; inset: 0;
        background: linear-gradient(135deg, var(--acc), var(--acc-rgb));
        opacity: 0; transition: opacity .3s var(--ease);
      }
      &:hover {
        border-color: var(--acc); transform: translateY(-4px); box-shadow: var(--sh2);
        &::before { opacity: 0.1; }
        .sk-n, .sk-y { color: var(--ink); }
      }
      &.hot {
        background: var(--acc); border-color: var(--acc);
        .sk-n, .sk-y { color: #fff; }
      }
    }
    .sk-n { font-size: 1rem; font-weight: 600; position: relative; z-index: 1; transition: color .3s; color: var(--ink); }
    .sk-y { font-family: var(--f3); font-size: .65rem; color: var(--ink3); letter-spacing: .1em; text-transform: uppercase; position: relative; z-index: 1; transition: color .3s; }
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
