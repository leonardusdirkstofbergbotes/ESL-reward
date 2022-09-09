import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageWrapperComponent } from './admin-page-wrapper.component';

describe('AdminPageWrapperComponent', () => {
  let component: AdminPageWrapperComponent;
  let fixture: ComponentFixture<AdminPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
