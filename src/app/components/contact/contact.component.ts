import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContactService } from '../../services/contact.service';
import { ToastService } from '../../services/toast.service';
import { ContactForm } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact">
      <div class="s-lbl" [appReveal]="0"><span class="s-num">07 //</span> Contact</div>

      <div class="ct-g">
        <!-- Left: info -->
        <div>
          <div class="ct-big" [appReveal]="100">
            Let's build<br>something<br><em>great.</em>
          </div>
          <p class="ct-sub" [appReveal]="200">
            Designing AI-enhanced frontend architectures that drive business impact. Senior Angular Architect ready to lead teams, architect platforms, or accelerate your product vision. Available for senior roles, technical leadership, and selective freelance projects worldwide.
          </p>
          <div class="ct-chs" [appReveal]="300">
            @for (ch of channels; track ch.label) {
              <a class="ct-ch hover-el" [href]="ch.href" [target]="ch.external ? '_blank' : '_self'" rel="noopener">
                <span>{{ ch.label }}</span>
                <span class="ct-arr">→</span>
              </a>
            }
          </div>
        </div>

        <!-- Right: form -->
        <div [appReveal]="200">
          <form class="ct-form" (ngSubmit)="submit()" #f="ngForm" novalidate>
            <div class="f-row">
              <div class="fg">
                <label for="f-name">Full Name *</label>
                <input id="f-name" name="name" type="text"
                       placeholder="Jane Smith"
                       autocomplete="name"
                       [(ngModel)]="form.name" required/>
              </div>
              <div class="fg">
                <label for="f-email">Email *</label>
                <input id="f-email" name="email" type="email"
                       placeholder="jane@company.com"
                       autocomplete="email"
                       [(ngModel)]="form.email" required/>
              </div>
            </div>
            <div class="fg">
              <label for="f-company">Company</label>
              <input id="f-company" name="company" type="text"
                     placeholder="Acme Corp"
                     autocomplete="organization"
                     [(ngModel)]="form.company"/>
            </div>
            <div class="fg">
              <label for="f-type">Enquiry Type</label>
              <select id="f-type" name="type" [(ngModel)]="form.type">
                <option value="">Select…</option>
                <option>Full-time Senior Role</option>
                <option>Freelance Project</option>
                <option>Technical Consulting</option>
                <option>Open Source / Collaboration</option>
                <option>Other</option>
              </select>
            </div>
            <div class="fg">
              <label for="f-msg">Message *</label>
              <textarea id="f-msg" name="message"
                        placeholder="Tell me about the role or project…"
                        [(ngModel)]="form.message" required></textarea>
            </div>

            

            <button class="btn-send hover-el" type="submit" [disabled]="contactSvc.sending()">
              @if (contactSvc.sending()) { Sending… } @else { Send message → }
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { overflow: hidden; }
    .ct-g { display: grid; grid-template-columns: 1fr 1fr; gap: 7rem; margin-top: 4rem; }
    .ct-big { font-family: var(--f1); font-size: clamp(3rem,6vw,6.5rem); font-weight: 300; line-height: .95; letter-spacing: -.04em; em { font-style: italic; color: var(--acc); } }
    .ct-sub { font-size: 1rem; line-height: 1.82; color: var(--ink2); margin-top: 1.8rem; font-weight: 300; max-width: 420px; }
    .ct-chs { margin-top: 2.5rem; }
    .ct-ch { display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 0; border-top: 1px solid var(--line); text-decoration: none; color: var(--ink2); font-size: .87rem; transition: color .25s; cursor: none;
      &:last-child { border-bottom: 1px solid var(--line); }
      &:hover { color: var(--acc); }
    }
    .ct-arr { color: var(--ink3); font-size: .72rem; transition: transform .25s; }
    .ct-ch:hover .ct-arr { transform: translateX(5px); color: var(--acc); }
    .ct-form { display: flex; flex-direction: column; gap: 1.2rem; }
    .f-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .fg {
      label { display: block; font-family: var(--f3); font-size: .59rem; color: var(--ink3); letter-spacing: .16em; text-transform: uppercase; margin-bottom: .4rem; }
      input, textarea, select { width: 100%; padding: .82rem 0; background: transparent; border: none; border-bottom: 1.5px solid var(--line); color: var(--ink); font-family: var(--f2); font-size: .9rem; outline: none; transition: border-color .25s; font-weight: 300; appearance: none;
        &:focus { border-color: var(--acc); }
        &::placeholder { color: var(--ink3); }
      }
      textarea { min-height: 115px; resize: none; }
      select { color: var(--ink2); }
    }
    .f-note { font-family: var(--f3); font-size: .58rem; color: var(--ink3); letter-spacing: .06em; line-height: 1.6; padding: .75rem; border: 1px solid var(--line); border-radius: 2px; background: var(--bg2); strong { color: var(--acc); } .active { color: #2ecc71; } }
    .btn-send { align-self: flex-start; padding: .88rem 2.1rem; background: var(--acc); color: #fff; font-family: var(--f3); font-size: .67rem; letter-spacing: .12em; text-transform: uppercase; border: none; border-radius: 2px; transition: background .25s, transform .25s;
      &:hover:not(:disabled) { background: var(--ink); transform: translateY(-2px); }
      &:disabled { opacity: .6; }
    }
    @media (max-width: 900px) { .ct-g { grid-template-columns: 1fr; gap: 4rem; } .f-row { grid-template-columns: 1fr; } }
  `],
})
export class ContactComponent {
  readonly contactSvc = inject(ContactService);
  private toast       = inject(ToastService);

  form: ContactForm = { name: '', email: '', company: '', type: '', message: '' };

  readonly channels = [
    { label: 'asrihsoufiane@gmail.com',              href: 'mailto:asrihsoufiane@gmail.com' },
    { label: '+212 677 604 950',                     href: 'tel:+212677604950' },
    { label: 'LinkedIn — 16K+ connections',           href: 'https://linkedin.com/in/soufiane-asrih-274303125', external: true },
    { label: 'GitHub — Asrih7 (23 repos)',            href: 'https://github.com/Asrih7', external: true },
    { label: 'Medium — @asrihsoufiane',               href: 'https://medium.com/@asrihsoufiane', external: true },
  ];

  async submit(): Promise<void> {
    if (!this.form.name.trim() || !this.form.email.trim() || !this.form.message.trim()) {
      this.toast.error('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
      this.toast.error('Please enter a valid email address.');
      return;
    }
    await this.contactSvc.send(this.form, this.toast);
    if (!this.contactSvc.sending()) {
      this.form = { name: '', email: '', company: '', type: '', message: '' };
    }
  }
}
