import { TestBed } from '@angular/core/testing';

import { UnicornApiService } from './unicorn-api.service';

describe('UnicornApiService', () => {
  let service: UnicornApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnicornApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
