import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerGroupComponent } from './sticker-group.component';

describe('StickerGroupComponent', () => {
  let component: StickerGroupComponent;
  let fixture: ComponentFixture<StickerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
