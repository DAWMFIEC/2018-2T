import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialComponent } from './editorial.component';

describe('EditorialComponent', () => {
  let component: EditorialComponent;
  let fixture: ComponentFixture<EditorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
