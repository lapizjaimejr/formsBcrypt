import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-submitted-up',
  templateUrl: './submitted-up.component.html',
  styleUrls: ['./submitted-up.component.css']
})
export class SubmittedUpComponent implements OnInit {
  
  @Input() val = {
    fName: "",
    lName: "",
    email: "",
    pNum: "",
    password: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}



