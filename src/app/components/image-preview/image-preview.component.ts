import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit, OnChanges {

  @Input() file: File;

  constructor() { }

  ngOnInit() {
    console.log(this.file);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
