import { TestBed } from '@angular/core/testing';

import { FirebaseWrapperService } from './firebase-wrapper.service';

describe('FirebaseWrapperService', () => {
  let service: FirebaseWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
