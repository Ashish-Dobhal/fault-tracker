import { TestBed, inject } from '@angular/core/testing';

import { DealDataService } from './deal-data.service';

describe('DealDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealDataService]
    });
  });

  it('should be created', inject([DealDataService], (service: DealDataService) => {
    expect(service).toBeTruthy();
  }));
});
