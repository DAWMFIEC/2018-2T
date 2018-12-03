import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnewComponent } from './mainnew.component';

describe('MainnewComponent', () => {
  let component: MainnewComponent;
  let fixture: ComponentFixture<MainnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
