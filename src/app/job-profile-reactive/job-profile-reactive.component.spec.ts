import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProfileReactiveComponent } from './job-profile-reactive.component';

describe('JobProfileReactiveComponent', () => {
  let component: JobProfileReactiveComponent;
  let fixture: ComponentFixture<JobProfileReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProfileReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProfileReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
