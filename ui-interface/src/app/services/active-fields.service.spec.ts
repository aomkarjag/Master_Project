import { TestBed } from '@angular/core/testing';

import { ActiveFieldsService } from './active-fields.service';

describe('ActiveFieldsService', () => {
  let service: ActiveFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
