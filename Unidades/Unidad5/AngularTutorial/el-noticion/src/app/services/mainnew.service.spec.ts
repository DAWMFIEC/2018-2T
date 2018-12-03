import { TestBed } from '@angular/core/testing';

import { MainnewService } from './mainnew.service';

describe('MainnewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainnewService = TestBed.get(MainnewService);
    expect(service).toBeTruthy();
  });
});
