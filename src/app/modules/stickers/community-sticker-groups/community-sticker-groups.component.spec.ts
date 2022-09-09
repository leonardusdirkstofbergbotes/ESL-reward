import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityStickerGroupsComponent } from './community-sticker-groups.component';

describe('CommunityStickerGroupsComponent', () => {
  let component: CommunityStickerGroupsComponent;
  let fixture: ComponentFixture<CommunityStickerGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityStickerGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityStickerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
