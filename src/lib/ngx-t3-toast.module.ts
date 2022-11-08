import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgxT3ToastComponent } from './ngx-t3-toast.component';

@NgModule({
  declarations: [
    NgxT3ToastComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class NgxT3ToastModule { }
