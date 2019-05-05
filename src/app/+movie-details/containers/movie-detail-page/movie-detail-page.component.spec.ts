import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailPageComponent } from './movie-detail-page.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailPageComponent;
  let fixture: ComponentFixture<MovieDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
