import { OverlayRef } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

export interface ToastParams {
  duration?: number;
  icon: string;
}

export type ToastType = 'info' | 'error' | 'warning' | 'success';

export const TOAST_DATA = new InjectionToken<ToastData>('TOAST_DATA');

export interface ToastData {
  type: ToastType;
  title?: string;
  message: string | string[];
  icon?: string;
  duration?: number;
  iconType: 'custom' | 'material';
}

export class ToastRef {
  constructor(readonly overlay: OverlayRef) { }

  private readonly isDisposed$ = new BehaviorSubject(false);

  dismiss() {
    this.overlay.dispose();
    this.isDisposed$.next(true);
  }

  afterDismissed() {
    return this.isDisposed$.pipe(
      filter((isDisposed) => !!isDisposed),
    );
  }

  isVisible() {
    return this.overlay && this.overlay.overlayElement;
  }

  getPosition() {
    return this.overlay.overlayElement.getBoundingClientRect();
  }
}
