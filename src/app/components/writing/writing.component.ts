import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ARTICLES } from '../../data/portfolio.data';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="writing">
      <div class="s-lbl" [appReveal]="0"><span class="s-num">06 //</span> Writing on Medium</div>
      <h2 class="s-ttl" [appReveal]="100">Sharing what<br><em>I've learned.</em></h2>

      <div class="wr-g">
        @for (article of articles; track article.title; let i = $index) {
          <a class="wr-c hover-el"
             [href]="article.url"
             target="_blank" rel="noopener"
             [appReveal]="(i % 2) * 150 + 100">
            <div class="wr-img-w">
              <img class="wr-img" [src]="article.coverImage" [alt]="article.title" loading="lazy"/>
            </div>
            <div class="wr-body">
              <div class="wr-tag">{{ article.tag }}</div>
              <div class="wr-ttl">{{ article.title }}</div>
              <div class="wr-desc">{{ article.description }}</div>
              <div class="wr-meta">
                <span class="wr-date">{{ article.date }} · {{ article.readTime }}</span>
                <span class="wr-read">Read →</span>
              </div>
            </div>
            <div class="wr-auth">
              <img class="wr-av" src="assets/profile/soufiane.svg" alt="Asrihsoufiane" width="26" height="26" loading="lazy"/>
              <span class="wr-an">Asrihsoufiane · Medium</span>
            </div>
          </a>
        }
      </div>

      <div class="more-link" [appReveal]="300">
        <a class="btn-o hover-el" href="https://medium.com/@asrihsoufiane" target="_blank" rel="noopener">
          View all articles on Medium →
        </a>
      </div>
    </section>
  `,
  styles: [`
    section { overflow: hidden; }
    .wr-g { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; margin-top: 4rem; }
    .wr-c {
      border: 1px solid var(--line); background: var(--bg2); border-radius: 2px;
      overflow: hidden; display: flex; flex-direction: column;
      transition: transform .3s var(--ease), box-shadow .3s, border-color .3s;
      text-decoration: none;
      &:hover { transform: translateY(-5px); box-shadow: var(--sh2); border-color: rgba(var(--acc-rgb),.3); }
    }
    .wr-img-w { overflow: hidden; position: relative; height: 220px; background: var(--bg3); }
    .wr-img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s var(--ease); display: block; }
    .wr-c:hover .wr-img { transform: scale(1.04); }
    .wr-body { padding: 1.8rem; flex: 1; display: flex; flex-direction: column; }
    .wr-tag { font-family: var(--f3); font-size: .54rem; color: var(--acc); letter-spacing: .18em; text-transform: uppercase; margin-bottom: .7rem; }
    .wr-ttl { font-family: var(--f1); font-size: 1.3rem; font-weight: 400; line-height: 1.28; margin-bottom: .75rem; color: var(--ink); letter-spacing: -.01em; }
    .wr-desc { font-size: .85rem; color: var(--ink2); line-height: 1.72; font-weight: 300; flex: 1; margin-bottom: 1.2rem; }
    .wr-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--line); }
    .wr-date { font-family: var(--f3); font-size: .58rem; color: var(--ink3); letter-spacing: .08em; }
    .wr-read { font-family: var(--f3); font-size: .58rem; color: var(--acc); letter-spacing: .1em; text-transform: uppercase; display: flex; align-items: center; gap: .35rem; transition: gap .25s; }
    .wr-c:hover .wr-read { gap: .6rem; }
    .wr-auth { display: flex; align-items: center; gap: .6rem; padding: .9rem 1.8rem; border-top: 1px solid var(--line); background: var(--bg3); }
    .wr-av { width: 26px; height: 26px; border-radius: 50%; object-fit: cover; border: 1.5px solid var(--acc); }
    .wr-an { font-family: var(--f3); font-size: .58rem; color: var(--ink3); letter-spacing: .08em; }
    .more-link { text-align: center; margin-top: 3rem; }
    @media (max-width: 900px) { .wr-g { grid-template-columns: 1fr; } }
  `],
})
export class WritingComponent {
  readonly articles = ARTICLES;
}
