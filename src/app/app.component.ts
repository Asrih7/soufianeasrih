import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  inject,
  computed,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ScrollService } from './services/scroll.service';
import { ThemeService }  from './services/theme.service';

import { LoaderComponent }          from './components/loader/loader.component';
import { CursorComponent }          from './components/cursor/cursor.component';
import { NavbarComponent }          from './components/navbar/navbar.component';
import { HeroComponent }            from './components/hero/hero.component';
import { AboutComponent }           from './components/about/about.component';
import { SkillsComponent }          from './components/skills/skills.component';
import { ExperienceComponent }      from './components/experience/experience.component';
import { PackagesComponent }        from './components/packages/packages.component';
import { CertificationsComponent }  from './components/certifications/certifications.component';
import { WritingComponent }         from './components/writing/writing.component';
import { ContactComponent }         from './components/contact/contact.component';
import { FooterComponent }          from './components/footer/footer.component';
import { ToastContainerComponent }  from './components/footer/toast-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LoaderComponent,
    CursorComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    PackagesComponent,
    CertificationsComponent,
    WritingComponent,
    ContactComponent,
    FooterComponent,
    ToastContainerComponent,
  ],
  template: `
    <!-- Loading screen -->
    <app-loader />

    <!-- Custom cursor (desktop) -->
    <app-cursor />

    <!-- Scroll progress bar -->
    <div
      id="scroll-progress"
      role="progressbar"
      aria-label="Page scroll progress"
      [style.transform]="'scaleX(' + scroll.progress() + ')'"
    ></div>

    <!-- Sticky navigation -->
    <app-navbar />

    <!-- Main content -->
    <main id="main-content">
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-packages />
      <app-certifications />
      <app-writing />
      <app-contact />
    </main>

    <!-- Footer -->
    <app-footer />

    <!-- Toast notifications -->
    <app-toast-container />

    <!-- Back-to-top button -->
    @if (scroll.showBtt()) {
      <button
        class="btt hover-el"
        aria-label="Back to top"
        (click)="scroll.toTop()"
      >↑</button>
    }
  `,
  styles: [`
    :host { display: block; }

    /* Scroll progress bar */
    #scroll-progress {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 500;
      height: 2px;
      background: var(--acc);
      transform-origin: left;
      pointer-events: none;
      transition: transform .08s linear;
    }

    /* Back-to-top */
    .btt {
      position: fixed;
      bottom: 2rem; left: 2rem;
      z-index: 400;
      width: 40px; height: 40px;
      background: var(--bg);
      border: 1px solid var(--line);
      color: var(--ink2);
      border-radius: 2px;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--sh);
      transition: background .25s, color .25s, border-color .25s, transform .25s;
      animation: bttIn .35s var(--ease) forwards;

      &:hover {
        background: var(--acc);
        color: #fff;
        border-color: var(--acc);
        transform: translateY(-2px);
      }
    }

    @keyframes bttIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: none; }
    }

    /* Skip link for accessibility */
    .skip-link {
      position: absolute;
      top: -100%;
      left: 1rem;
      padding: .5rem 1rem;
      background: var(--acc);
      color: #fff;
      font-family: var(--f3);
      font-size: .75rem;
      letter-spacing: .1em;
      text-decoration: none;
      border-radius: 0 0 2px 2px;
      z-index: 9999;

      &:focus { top: 0; }
    }
  `],
})
export class AppComponent implements OnInit, AfterViewInit {
  readonly scroll     = inject(ScrollService);
  readonly theme      = inject(ThemeService);
  private platformId  = inject(PLATFORM_ID);
  readonly isDark     = computed(() => this.theme.theme() === 'dark');

  ngOnInit(): void {
    // Start scroll tracking (progress bar + active section + btt visibility)
    this.scroll.init();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Restore default cursor on keyboard navigation; hide on mouse
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') document.body.style.cursor = 'auto';
    });
    document.addEventListener('mousemove', () => {
      document.body.style.cursor = 'none';
    });
  }
}
