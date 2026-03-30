import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <span>© {{ year }} <b>Soufiane Asrih</b> · SA7Tec</span>
      <span class="f-c">Tétouan, Morocco 🇲🇦 </span>
      <span class="f-r">
        <a href="mailto:asrihsoufiane@gmail.com">asrihsoufiane&#64;gmail.com</a>
      </span>
    </footer>
  `,
  styles: [`
    footer {
      padding: 2rem 5vw;
      border-top: 1px solid var(--line);
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 1rem;
      font-family: var(--f3);
      font-size: .59rem;
      color: var(--ink3);
      letter-spacing: .1em;
      text-transform: uppercase;
      b { color: var(--acc); font-weight: 400; }
    }
    .f-c { text-align: center; }
    .f-r { text-align: right; a { color: var(--ink3); text-decoration: none; transition: color .25s; &:hover { color: var(--acc); } } }
    @media (max-width: 900px) {
      footer { grid-template-columns: 1fr; text-align: center; }
      .f-c, .f-r { text-align: center; }
    }
  `],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
