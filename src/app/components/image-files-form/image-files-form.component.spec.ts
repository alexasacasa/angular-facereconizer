import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFilesFormComponent } from './image-files-form.component';

describe('ImageFilesFormComponent', () => {
  let component: ImageFilesFormComponent;
  let fixture: ComponentFixture<ImageFilesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFilesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFilesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
