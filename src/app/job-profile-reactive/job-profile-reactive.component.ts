import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-job-profile-reactive',
  templateUrl: './job-profile-reactive.component.html',
  styleUrls: ['./job-profile-reactive.component.css']
})
export class JobProfileReactiveComponent implements OnInit {
  
  form = this.fb.group ({
    jobPos: ['',
      {
        validators: [Validators.required, Validators.minLength(5)],
      },
    ],
    dept: ['',
      {
        validators: [Validators.required, Validators.minLength(2)],
      },
    ],
    salary: ['',
      {
        validators: [Validators.required, Validators.min(7000)],
      },
    ],
    wrkHrs: ['',
      {
        validators: [Validators.required, Validators.min(10)],
      },
    ],
    dayOff: ['',
      {
        validators: [Validators.required, Validators.minLength(6)],
      },
    ],
  });
  
  constructor(private fb: FormBuilder) { }

  @Output() jobProfVal = new EventEmitter<FormGroup>();  

  onSubmit() {
    this.jobProfVal.emit(this.form);
  } 
  
  ngOnInit(): void {
  }

  get jobPos() {
    return this.form.controls['jobPos'];
  }

  get dept() {
    return this.form.controls['dept'];
  }

  get salary() {
    return this.form.controls['salary'];
  }

  get wrkHrs() {
    return this.form.controls['wrkHrs'];
  }

  get dayOff() {
    return this.form.controls['dayOff'];
  }

}
