import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxT3ToastModule } from '@traent/ngx-toast';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    NgxT3ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
