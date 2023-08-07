import { TestBed } from '@angular/core/testing';

import { HistoricEffectService } from './historic.effect.service';

describe('HistoricEffectService', () => {
  let service: HistoricEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
