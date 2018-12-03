import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRESTComponent } from './request-rest.component';

describe('RequestRESTComponent', () => {
  let component: RequestRESTComponent;
  let fixture: ComponentFixture<RequestRESTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRESTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
