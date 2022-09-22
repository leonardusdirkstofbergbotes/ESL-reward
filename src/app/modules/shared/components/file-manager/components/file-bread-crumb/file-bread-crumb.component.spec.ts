import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBreadCrumbComponent } from './file-bread-crumb.component';

describe('FileBreadCrumbComponent', () => {
  let component: FileBreadCrumbComponent;
  let fixture: ComponentFixture<FileBreadCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileBreadCrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileBreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
