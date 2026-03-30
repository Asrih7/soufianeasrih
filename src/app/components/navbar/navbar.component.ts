import { Component, ChangeDetectionStrategy, inject, computed, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Mobile overlay menu -->
    <div class="m-menu" [class.op]="menuOpen()" role="dialog" aria-label="Navigation menu">
      @for (l of links; track l.id) {
        <a [href]="'#' + l.id" (click)="closeMM()">{{ l.label }}</a>
      }
    </div>

    <nav [class.stuck]="scroll.isScrolled()" role="navigation" aria-label="Main navigation">
      <!-- Logo -->
      <a class="n-logo hover-el" (click)="go('hero')">
        <img class="n-photo" src="assets/profile/soufiane.jpg" alt="Soufiane Asrih" width="34" height="34"/>
        <span class="n-title">Soufiane <em>Asrih</em></span>
      </a>

      <!-- Desktop links -->
      <ul class="n-links" role="list">
        @for (l of links; track l.id) {
          <li>
            <a [href]="'#' + l.id"
               [class.act]="scroll.activeSection() === l.id"
               (click)="go(l.id)">{{ l.label }}</a>
          </li>
        }
      </ul>

      <!-- Right controls -->
      <div class="n-right">
        <!-- Theme toggle -->
        <button class="t-btn hover-el" (click)="theme.toggle()" [attr.aria-label]="isDark() ? 'Light mode' : 'Dark mode'">
          @if (isDark()) {
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          } @else {
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          }
        </button>

        <!-- Hamburger -->
        <button class="hbg" [class.op]="menuOpen()"
                (click)="toggleMenu()"
                aria-label="Toggle menu"
                [attr.aria-expanded]="menuOpen()">
          <span></span><span></span><span></span>
        </button>

        <a class="n-hire hover-el" (click)="go('contact')">Hire me</a>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 2rem 5vw;
      transition: all .4s var(--ease);
    }
    nav.stuck {
      background: var(--surf);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      padding: 1rem 5vw;
      border-bottom: 1px solid var(--line);
      box-shadow: 0 1px 24px rgba(0,0,0,.05);
    }
    .n-logo { display: flex; align-items: center; gap: .7rem; text-decoration: none; cursor: none; }
    .n-photo { width: 34px; height: 34px; border-radius: 50%; object-fit: contain; border: 2px solid var(--acc); flex-shrink: 0; }
    .n-title { font-family: var(--f1); font-size: 1.25rem; font-weight: 600; color: var(--ink); letter-spacing: -.02em; }
    .n-title em { font-style: italic; color: var(--acc); }
    .n-links { display: flex; gap: 2.5rem; list-style: none; }
    .n-links a {
      font-family: var(--f3); font-size: .67rem; color: var(--ink3);
      text-decoration: none; letter-spacing: .13em; text-transform: uppercase;
      transition: color .25s; position: relative; padding-bottom: 2px; cursor: none;
      &::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: var(--acc); transition: width .3s var(--ease); }
      &:hover, &.act { color: var(--acc); }
      &:hover::after, &.act::after { width: 100%; }
    }
    .n-right { display: flex; align-items: center; gap: .9rem; }
    .t-btn {
      background: none; border: 1px solid var(--line); padding: .4rem; color: var(--ink3);
      border-radius: 2px; display: flex; align-items: center; justify-content: center;
      transition: all .25s;
      &:hover { color: var(--acc); border-color: var(--acc); }
    }
    .n-hire {
      font-family: var(--f3); font-size: .67rem; letter-spacing: .12em; text-transform: uppercase;
      padding: .52rem 1.15rem; background: var(--ink); color: var(--bg);
      text-decoration: none; border-radius: 2px; transition: background .25s, transform .2s;
      border: 1.5px solid var(--ink); cursor: none;
      &:hover { background: var(--acc); border-color: var(--acc); transform: translateY(-1px); }
    }
    .hbg {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: none; padding: 4px;
      span { width: 22px; height: 1.5px; background: var(--ink); border-radius: 1px; display: block; transition: all .3s var(--ease); }
      &.op span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
      &.op span:nth-child(2) { opacity: 0; transform: scaleX(0); }
      &.op span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
    }
    /* Mobile menu */
    .m-menu {
      position: fixed; inset: 0; z-index: 90; background: var(--bg);
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2.5rem;
      transform: translateY(-100%); transition: transform .5s var(--ease); pointer-events: none;
      a { font-family: var(--f1); font-size: 2.8rem; font-weight: 300; color: var(--ink); text-decoration: none; letter-spacing: -.02em; transition: color .25s; &:hover { color: var(--acc); } }
      &.op { transform: none; pointer-events: all; }
    }
    @media (max-width: 900px) {
      nav { padding: 1.3rem 5vw; }
      .n-links { display: none; }
      .hbg { display: flex; }
    }
  `],
})
export class NavbarComponent {
  readonly scroll   = inject(ScrollService);
  readonly theme    = inject(ThemeService);
  readonly isDark   = computed(() => this.theme.theme() === 'dark');
  readonly menuOpen = signal(false);

  readonly links = [
    { id: 'about',    label: 'About'    },
    { id: 'skills',   label: 'Skills'   },
    { id: 'exp',      label: 'Work'     },
    { id: 'packages', label: 'Projects' },
    { id: 'certs',    label: 'Certs'    },
    { id: 'writing',  label: 'Writing'  },
    { id: 'contact',  label: 'Contact'  },
  ];

  go(id: string): void {
    this.closeMM();
    this.scroll.scrollTo(id);
  }

  toggleMenu(): void { this.menuOpen.update(v => !v); }
  closeMM(): void    { this.menuOpen.set(false); }
}
