import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-faces';
  selectedFile: File;

  onSelected(file: File) {
    console.log(file);
    this.selectedFile = file;
  }
}
