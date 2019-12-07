import { TestBed } from '@angular/core/testing';

import { LiteralesService } from './literales.service';

describe('LiteralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteralesService = TestBed.get(LiteralesService);
    expect(service).toBeTruthy();
  });
});
