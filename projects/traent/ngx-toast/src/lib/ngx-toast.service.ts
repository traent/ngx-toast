import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { first } from 'rxjs';

import { NgxT3ToastComponent } from './ngx-toast.component';
import { ToastRef, ToastParams, ToastData, TOAST_DATA } from './ngx-toast.model';

const defaultToastData = {
  type: 'info',
  message: '',
  duration: 5000,
  iconType: 'material',
};

@Injectable({
  providedIn: 'root',
})
export class NgxT3ToastService {
  private readonly queue: ToastRef[] = [];

  constructor(
    private readonly overlay: Overlay,
  ) {
  }

  async error(content: string | string[], title: string) {
    return this.show({ type: 'error', title, message: content, icon: 'error', duration: 0 });
  }
  async warning(content: string, title: string) {
    return this.show({ type: 'warning', title, message: content, icon: 'warning', duration: 0 });
  }

  async success(content: string, title: string) {
    return this.show({ type: 'success', title, message: content, icon: 'check', duration: 5000 });
  }

  async message(content: string, title: string, options: ToastParams) {
    return this.show({ type: 'info', title, message: content, icon: options.icon, duration: options.duration ?? 5000 });
  }

  async show(data: Partial<ToastData>) {
    const overlayRef = this.overlay.create();
    const toastRef = new ToastRef(overlayRef);

    const injector = Injector.create({
      providers: [
        { provide: TOAST_DATA, useValue: { ...defaultToastData, ...data } },
        { provide: ToastRef, useValue: toastRef },
      ],
    });
    const toastPortal = new ComponentPortal(NgxT3ToastComponent, null, injector);
    overlayRef.attach(toastPortal);

    // Recompute toast positions after new one is displayed or dismissed
    this.queue.push(toastRef);
    this.recomputePosition();
    toastRef.afterDismissed().pipe(first()).subscribe(() => {
      this.queue.splice(this.queue.findIndex((ref) => ref === toastRef), 1);
      this.recomputePosition();
    });

    return toastRef;
  }

  private recomputePosition() {
    for (let i = 0; i < this.queue.length; ++i) {
      const toastRef = this.queue[i];
      let bottom = 20;
      if (i > 0) {
        const prevRef = this.queue[i - 1];
        bottom = prevRef.overlay.overlayElement
          ? window.innerHeight - prevRef.getPosition().top + 12
          : 20;
      }
      const strategy = this.overlay.position().global().right('20px').bottom(bottom + 'px');
      toastRef.overlay.updatePositionStrategy(strategy);
      toastRef.overlay.updatePosition();
    }
  }
}
