import { TestBed } from '@angular/core/testing';

import { StickerGroupService } from './sticker-group.service';

describe('StickerGroupService', () => {
  let service: StickerGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickerGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
