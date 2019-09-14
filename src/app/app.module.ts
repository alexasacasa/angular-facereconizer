import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageFilesFormComponent } from './components/image-files-form/image-files-form.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageFilesFormComponent,
    ImagePreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
