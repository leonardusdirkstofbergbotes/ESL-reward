import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDropPoolComponent } from './file-drop-pool.component';

describe('FileDropPoolComponent', () => {
  let component: FileDropPoolComponent;
  let fixture: ComponentFixture<FileDropPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDropPoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDropPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
