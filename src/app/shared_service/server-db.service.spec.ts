import { TestBed } from '@angular/core/testing';

import { ServerDbService } from './server-db.service';

describe('ServerDbService', () => {
  let service: ServerDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
