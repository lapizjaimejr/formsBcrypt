import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-profile-template',
  templateUrl: './user-profile-template.component.html',
  styleUrls: ['./user-profile-template.component.css']
})
export class UserProfileTemplateComponent implements OnInit {

  constructor() { }

  val = {
    firstName: "",
    lastName: "",
    email: "",
    pNum: "",
    password: ""
  }
  
  @Output() objVal = new EventEmitter<NgForm>();

  passInfo (v: NgForm) {
    this.objVal.emit(v);
    console.log(v.value);
  }


  ngOnInit(): void {
  }


}
