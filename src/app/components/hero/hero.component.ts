import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef, OnDestroy, inject } from '@angular/core';
import { ThreeSceneService } from '../../services/three-scene.service';
import { ScrollService } from '../../services/scroll.service';
import { CounterDirective } from '../../directives/counter.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CounterDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="hero">
      <!-- 3D Canvas — fixed, full viewport -->
      <canvas #threeCanvas class="three-canvas" aria-hidden="true"></canvas>

      <!-- Left content -->
      <div class="h-l">
        <div class="h-bdg">
          <span class="g-dot" aria-hidden="true"></span>
          Expert Frontend Architect &amp; Scrum Master
        </div>

        <h1 class="h-h1">
          Building the<br>web <i>with</i><br>precision.
  
        </h1>

        <div class="h-ctas">
          <a class="btn-p hover-el" (click)="go('exp')">View Experience</a>
          <a class="btn-o hover-el" (click)="go('contact')">Start a conversation</a>
        </div>

        <div class="h-stats" aria-label="Key statistics">
          <div class="stat">
            <div class="stat-n"><span [appCounter]="10" suffix="+"></span></div>
            <div class="stat-l">Years</div>
          </div>
          <div class="stat">
            <div class="stat-n"><span [appCounter]="16" suffix="K+"></span></div>
            <div class="stat-l">LinkedIn</div>
          </div>
          <div class="stat">
            <div class="stat-n"><span [appCounter]="4"></span></div>
            <div class="stat-l">npm Packages</div>
          </div>
          <div class="stat">
            <div class="stat-n"><span [appCounter]="6"></span></div>
            <div class="stat-l">Companies</div>
          </div>
          <div class="stat">
            <div class="stat-n"><span [appCounter]="50" suffix="%"></span></div>
            <div class="stat-l">Dev time saved</div>
          </div>
        </div>
      </div>

      <!-- Right side: hint label over canvas -->
      <div class="h-r" aria-hidden="true">
        <div class="h-hint">
          <span class="hint-dot"></span>
          Interactive · move mouse · scroll to morph
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      min-height: 100vh;
      display: grid; grid-template-columns: 1fr 1fr;
      align-items: center; padding: 0 5vw; gap: 4rem;
      position: relative;
    }
    .three-canvas {
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      width: 100% !important; height: 100% !important;
    }
    .h-l { padding-top: 6rem; position: relative; z-index: 2; }

    .h-bdg {
      display: inline-flex; align-items: center; gap: .8rem;
      font-family: var(--f3); font-size: .64rem; color: var(--acc);
      letter-spacing: .22em; text-transform: uppercase; margin-bottom: 2.5rem;
      opacity: 0; animation: fi .8s 1.9s forwards;
      &::before { content: ''; width: 26px; height: 1px; background: var(--acc); }
    }
    .g-dot { width: 6px; height: 6px; border-radius: 50%; background: #2ecc71; animation: gb 2.2s infinite; }
    @keyframes gb { 0%,100% { box-shadow: 0 0 0 0 rgba(46,204,113,.4); } 50% { box-shadow: 0 0 0 6px rgba(46,204,113,0); } }

    .h-h1 {
      font-family: var(--f1);
      font-size: clamp(3.5rem, 7vw, 7.5rem);
      font-weight: 300; line-height: .9; letter-spacing: -.035em; margin-bottom: 2rem;
      opacity: 0; animation: fi 1s 2.1s forwards;
      i { font-style: italic; color: var(--acc); }
    }
    .h-sub {
      display: block; font-family: var(--f2);
      font-size: clamp(.95rem, 1.7vw, 1.1rem);
      font-weight: 300; color: var(--ink2); line-height: 1.78;
      margin-top: 1.3rem; font-style: normal;
    }
    .h-ctas { display: flex; gap: .9rem; flex-wrap: wrap; margin-bottom: 3rem; opacity: 0; animation: fi .8s 2.3s forwards; }
    .h-stats {
      display: flex; gap: 2.5rem; padding-top: 2.5rem;
      border-top: 1px solid var(--line); flex-wrap: wrap;
      opacity: 0; animation: fi .8s 2.5s forwards;
    }
    .stat-n { font-family: var(--f1); font-size: 2.8rem; font-weight: 300; line-height: 1; color: var(--ink); }
    .stat-l { font-family: var(--f3); font-size: .56rem; color: var(--ink3); letter-spacing: .14em; text-transform: uppercase; margin-top: .3rem; }

    .h-r { display: flex; align-items: center; justify-content: center; height: 100vh; position: relative; z-index: 2; }
    .h-hint {
      position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%);
      font-family: var(--f3); font-size: .56rem; color: var(--ink3);
      letter-spacing: .2em; text-transform: uppercase;
      display: flex; align-items: center; gap: .6rem; white-space: nowrap;
      opacity: 0; animation: fi 1s 2.9s both;
    }
    .hint-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--acc); flex-shrink: 0; animation: blk 2s infinite; }
    @keyframes blk { 0%,100% { opacity: 1; } 50% { opacity: .1; } }
    @keyframes fi { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

    @media (max-width: 900px) {
      section { grid-template-columns: 1fr; padding-top: 7rem; min-height: auto; padding-bottom: 2rem; }
      .h-r { height: 55vw; min-height: 240px; }
      .h-stats { gap: 1.5rem; }
    }
  `],
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('threeCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private three  = inject(ThreeSceneService);
  private scroll = inject(ScrollService);

  ngAfterViewInit(): void { this.three.init(this.canvasRef.nativeElement); }
  ngOnDestroy(): void     { this.three.destroy(); }
  go(id: string): void    { this.scroll.scrollTo(id); }
}
