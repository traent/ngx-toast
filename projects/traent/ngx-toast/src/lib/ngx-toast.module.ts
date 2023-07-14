import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgxT3ToastComponent } from './ngx-toast.component';

@NgModule({
  declarations: [
    NgxT3ToastComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    OverlayModule,
  ],
})
export class NgxT3ToastModule { }
