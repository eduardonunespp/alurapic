import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PhotosModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
