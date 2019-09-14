import { TestBed } from '@angular/core/testing';

import { FaceDetectionService } from './face-detection.service';

describe('FaceDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaceDetectionService = TestBed.get(FaceDetectionService);
    expect(service).toBeTruthy();
  });
});
