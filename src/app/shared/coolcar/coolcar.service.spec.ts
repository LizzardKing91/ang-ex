import { TestBed, inject } from '@angular/core/testing';

import { CoolcarService } from './coolcar.service';

describe('CoolcarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoolcarService]
    });
  });

  it('should be created', inject([CoolcarService], (service: CoolcarService) => {
    expect(service).toBeTruthy();
  }));
});
