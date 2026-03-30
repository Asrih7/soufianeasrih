import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="toast-wrap" role="status" aria-live="polite" aria-atomic="true">
      @for (t of toast.toasts(); track t.id) {
        <div class="toast" [class]="t.type" (click)="toast.remove(t.id)">
          {{ t.message }}
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-wrap { position: fixed; bottom: 2rem; right: 2rem; z-index: 800; display: flex; flex-direction: column; gap: .7rem; max-width: 340px; pointer-events: none; }
    .toast { padding: .9rem 1.4rem; background: var(--ink); color: var(--bg); font-family: var(--f3); font-size: .7rem; letter-spacing: .07em; border-left: 3px solid var(--acc); border-radius: 2px; animation: toIn .4s var(--ease) forwards; box-shadow: var(--sh2); pointer-events: all; cursor: pointer;
      &.suc { border-color: #2ecc71; }
      &.err { border-color: #e74c3c; }
    }
    @keyframes toIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: none; } }
  `],
})
export class ToastContainerComponent {
  readonly toast = inject(ToastService);
}
