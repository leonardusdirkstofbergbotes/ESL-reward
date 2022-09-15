import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTabsComponent } from './modal-tabs.component';

describe('ModalTabsComponent', () => {
  let component: ModalTabsComponent;
  let fixture: ComponentFixture<ModalTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
