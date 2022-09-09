import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStickerGroupsComponent } from './my-sticker-groups.component';

describe('MyStickerGroupsComponent', () => {
  let component: MyStickerGroupsComponent;
  let fixture: ComponentFixture<MyStickerGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStickerGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyStickerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
