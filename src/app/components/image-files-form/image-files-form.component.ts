import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface HTMLInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-image-files-form',
  templateUrl: './image-files-form.component.html',
  styleUrls: ['./image-files-form.component.scss']
})
export class ImageFilesFormComponent implements OnInit {

  @Output() selected: EventEmitter<File> = new EventEmitter;

  constructor() { }

  ngOnInit() {

  }

  onFileSelect(event: HTMLInputEvent) {
    this.selected.emit(event.target.files[0]);
    console.log(event.target.files);
  }

}
