import { Injectable, signal } from '@angular/core';
import { ToastService } from './toast.service';
import { ContactForm } from '../models/portfolio.models';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EMAILJS SETUP
   1. Public Key: JzJlbmIoQ5-ujtIgN
   2. Service ID: service_6womk7q
   3. Template ID: template_s2wirfx
   4. Variables to use in template:
      {{from_name}}, {{reply_to}}, {{company}}, {{enquiry_type}}, {{message}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const EJ_PUBLIC_KEY  = 'JzJlbmIoQ5-ujtIgN';
const EJ_SERVICE_ID  = 'service_6womk7q';
const EJ_TEMPLATE_ID = 'template_s2wirfx';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private toast = new ToastService();
  readonly sending = signal(false);
  readonly ejReady =  true;

  constructor() {
    if (this.ejReady) this.loadEmailJS();
  }

  private loadEmailJS(): void {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = () => (window as any).emailjs?.init(EJ_PUBLIC_KEY);
    document.head.appendChild(s);
  }

  async send(form: ContactForm, toastService: ToastService): Promise<void> {
    this.sending.set(true);

    if (this.ejReady && (window as any).emailjs) {
      try {
        await (window as any).emailjs.send(EJ_SERVICE_ID, EJ_TEMPLATE_ID, {
          from_name:    form.name,
          reply_to:     form.email,
          company:      form.company || 'N/A',
          enquiry_type: form.type || 'General',
          message:      form.message,
        });
        toastService.success("✓ Sent! I'll reply to " + form.email + " within 24h.");
      } catch {
        toastService.error('Send failed — email me directly at asrihsoufiane@gmail.com');
      }
    } else {
      await new Promise(r => setTimeout(r, 500));
      toastService.show('Demo mode — add your EmailJS keys in contact.service.ts to activate real sending.', 'info');
    }

    this.sending.set(false);
  }
}