import { TestBed } from '@angular/core/testing';

import { AstService } from './ast.service';

describe('AstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AstService = TestBed.get(AstService);
    expect(service).toBeTruthy();
  });
});
