import { TestBed } from '@angular/core/testing';

import { VideoEffectService } from './video.effect.service';

describe('VideoEffectService', () => {
  let service: VideoEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
