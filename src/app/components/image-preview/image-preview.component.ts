import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit, OnChanges {

  @Input() file: File;
  imageSrc: (string | ArrayBuffer);

  constructor() { }

  ngOnInit() {
    console.log(this.file);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.file.currentValue) {
      this.setImageSrc(changes.file.currentValue);
    }
  }

  private setImageSrc(image: File): void {
    const reader = new FileReader();
    reader.onload = e => {
      console.log(reader.result);
      this.imageSrc = reader.result;
    };
    reader.readAsDataURL(image);
  }

}
