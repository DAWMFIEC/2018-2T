import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentnewComponent } from './recentnew.component';

describe('RecentnewComponent', () => {
  let component: RecentnewComponent;
  let fixture: ComponentFixture<RecentnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
