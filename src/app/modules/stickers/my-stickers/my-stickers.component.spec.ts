import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStickersComponent } from './my-stickers.component';

describe('MyStickersComponent', () => {
  let component: MyStickersComponent;
  let fixture: ComponentFixture<MyStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStickersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
