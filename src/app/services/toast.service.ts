import { Injectable, signal } from '@angular/core';

export interface Toast { id: number; message: string; type: 'suc' | 'err' | 'info'; }

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);
  private counter = 0;

  show(message: string, type: Toast['type'] = 'info', duration = 4200): void {
    const id = ++this.counter;
    this.toasts.update(list => [...list, { id, message, type }]);
    setTimeout(() => this.remove(id), duration);
  }

  success(msg: string): void { this.show(msg, 'suc'); }
  error(msg: string):   void { this.show(msg, 'err'); }
  remove(id: number):   void { this.toasts.update(list => list.filter(t => t.id !== id)); }
}
