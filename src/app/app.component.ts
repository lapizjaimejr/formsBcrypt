import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { getMatIconNameNotFoundError } from '@angular/material/icon';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  upLength: boolean = false;
  jpLength: boolean = false;
  val: any = {
    fName: "",
    lName: "",
    email: "",
    pNum: "",
    password: ""
  }

  form = {
    jobPos: "",
    dept: "",
    salary: "",
    wrkHrs: "",
    dayOff: ""
  }
 

  hashAndSalt(pass: any) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    return hash;
  }

  getUserProf(objVal: NgForm) {
    this.val['fName'] = objVal.value.firstName;
    this.val['lName'] = objVal.value.lastName;
    this.val['email'] = objVal.value.email;
    this.val['pNum'] = objVal.value.phone;
    this.val['password'] = this.hashAndSalt(objVal.value.password);
    this.upLength=true;
  }

  getJobProf(jobProfVal: FormGroup) {
    this.form['jobPos'] = jobProfVal.controls.jobPos.value;
    this.form['dept'] = jobProfVal.controls.dept.value;
    this.form['salary'] = jobProfVal.controls.salary.value;
    this.form['wrkHrs'] = jobProfVal.controls.wrkHrs.value;
    this.form['dayOff'] = jobProfVal.controls.dayOff.value;
    this.jpLength=true;
  }
}

