import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageFilesFormComponent } from './components/image-files-form/image-files-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageFilesFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
