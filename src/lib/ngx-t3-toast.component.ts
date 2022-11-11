import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Inject } from '@angular/core';

import { ToastData, ToastRef, TOAST_DATA } from './ngx-t3-toast.model';

@Component({
  selector: 'ngx-t3-toast',
  template: `
    <div
      class="toast"
      [ngClass]="data.type"
      @toastAnimation>
      <div class="toast-title">
        <div *ngIf="data.icon" class="toast-icon-wrapper">
          <mat-icon
            *ngIf="data.iconType === 'custom'"
            [svgIcon]="data.icon"></mat-icon>
          <mat-icon *ngIf="data.iconType === 'material'">{{ data.icon }}</mat-icon>
        </div>
        <div
          *ngIf="data.title"
          class="opal-h5">{{ data.title }}</div>
        <button
          mat-icon-button
          class="toast-close"
          (click)="toastRef.dismiss()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div
        *ngIf="listOfMessage; else message"
        class="toast-content">
        <ul>
          <li *ngFor="let message of listOfMessage">
            {{ message }}
          </li>
        </ul>
      </div>
      <ng-template #message>
        <div class="toast-content">{{ data.message }}</div>
      </ng-template>
    </div>
  `,
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', transformOrigin: 'center', opacity: 0 }),
        animate('120ms cubic-bezier(0, 0, 0.2, 1)',
          style({ transform: 'scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('120ms ease-in',
          style({ transform: 'scale(0.5)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class NgxT3ToastComponent {
  readonly listOfMessage = Array.isArray(this.data.message) && this.data.message;

  constructor(
    @Inject(TOAST_DATA) readonly data: ToastData,
    readonly toastRef: ToastRef,
  ) {
    if (this.data.duration) {
      setTimeout(() => this.toastRef.dismiss(), this.data.duration);
    }
  }
}
