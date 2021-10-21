import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedUpComponent } from './submitted-up.component';

describe('SubmittedUpComponent', () => {
  let component: SubmittedUpComponent;
  let fixture: ComponentFixture<SubmittedUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
