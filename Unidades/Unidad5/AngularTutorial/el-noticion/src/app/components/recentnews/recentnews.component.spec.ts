import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentnewsComponent } from './recentnews.component';

describe('RecentnewsComponent', () => {
  let component: RecentnewsComponent;
  let fixture: ComponentFixture<RecentnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
