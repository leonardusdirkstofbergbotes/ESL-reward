import { TestBed } from '@angular/core/testing';

import { FileDropPoolServiceService } from './file-drop-pool-service.service';

describe('FileDropPoolServiceService', () => {
  let service: FileDropPoolServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileDropPoolServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
