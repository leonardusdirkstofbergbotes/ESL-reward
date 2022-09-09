import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerNavigatorComponent } from './sticker-navigator.component';

describe('StickerNavigatorComponent', () => {
  let component: StickerNavigatorComponent;
  let fixture: ComponentFixture<StickerNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
