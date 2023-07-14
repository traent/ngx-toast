import { Component, inject } from '@angular/core';
import { ToastData, ToastParams, ToastType } from 'projects/traent/ngx-toast/src/lib/ngx-toast.model'

import { NgxT3ToastService } from '@traent/ngx-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly toastService = inject(NgxT3ToastService);

  async showToast(param: ToastType | 'message' | 'show', options?: ToastParams | Partial<ToastData>) {
    switch (param) {
      case 'warning':
      case 'error':
      case 'success':
        await this.toastService[param](`You can customize ${param} toast by setting its content and title.`, 'Your toast\'s title');
        break;
      case 'message':
        await this.toastService.message('A customizable toast, that allows you to set its icon and duration.', 'Message', options as NonNullable<ToastParams>);
        break;
      case 'show':
        await this.toastService.show(options as NonNullable<ToastData>);
        break;
    }
  }
}
