import { Component, OnInit } from '@angular/core';
import { FaceDetectionService } from './services/face-detection/face-detection.service';
import { FacesRecognized } from './services/face-detection/face-detection.modles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-faces';
  selectedFile: File;

  constructor(private faceDetectionService: FaceDetectionService) {

  }

  ngOnInit() {
  }

  onSelected(file: File) {
    this.selectedFile = file;
    this.faceDetectionService.reconize(file).subscribe((res: FacesRecognized) => {
      console.log(res);
    });
  }
}
