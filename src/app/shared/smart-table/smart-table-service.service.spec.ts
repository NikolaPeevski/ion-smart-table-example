import { TestBed } from '@angular/core/testing';

import { SmartTableServiceService } from './smart-table-service.service';

describe('SmartTableServiceService', () => {
  let service: SmartTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
