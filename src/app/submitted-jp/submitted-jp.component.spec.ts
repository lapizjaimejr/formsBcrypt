import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedJpComponent } from './submitted-jp.component';

describe('SubmittedJpComponent', () => {
  let component: SubmittedJpComponent;
  let fixture: ComponentFixture<SubmittedJpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedJpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
