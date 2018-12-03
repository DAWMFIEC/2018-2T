import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotonewsComponent } from './photonews.component';

describe('PhotonewsComponent', () => {
  let component: PhotonewsComponent;
  let fixture: ComponentFixture<PhotonewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotonewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotonewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
