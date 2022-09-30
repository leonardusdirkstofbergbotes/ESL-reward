import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerCollectionComponent } from './sticker-collection.component';

describe('StickerCollectionComponent', () => {
  let component: StickerCollectionComponent;
  let fixture: ComponentFixture<StickerCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
