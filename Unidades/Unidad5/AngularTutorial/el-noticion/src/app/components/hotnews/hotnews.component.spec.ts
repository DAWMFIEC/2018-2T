import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotnewsComponent } from './hotnews.component';

describe('HotnewsComponent', () => {
  let component: HotnewsComponent;
  let fixture: ComponentFixture<HotnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
