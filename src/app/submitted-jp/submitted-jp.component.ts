import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submitted-jp',
  templateUrl: './submitted-jp.component.html',
  styleUrls: ['./submitted-jp.component.css']
})
export class SubmittedJpComponent implements OnInit {


  @Input() form = {
    jobPos: "",
    dept: "",
    salary: "",
    wrkHrs: "",
    dayOff: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
