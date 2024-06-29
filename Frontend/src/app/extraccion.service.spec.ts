import { TestBed } from '@angular/core/testing';

import { ExtraccionService } from './extraccion.service';

describe('ExtraccionService', () => {
  let service: ExtraccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
