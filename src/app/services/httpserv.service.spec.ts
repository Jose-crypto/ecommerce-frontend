import { TestBed } from '@angular/core/testing';

import { HttpservService } from './httpserv.service';

describe('HttpservService', () => {
  let service: HttpservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
