import { Component, OnInit } from '@angular/core';
import {Student} from 'src/app/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash: Student [] = [
    {
      fName : 'Deon',
      lName : 'Simmons',
      sName : 'Deon',
      pNumber : 2094907767
    },
    {
      fName : 'Lourn',
      lName : 'Selga',
      sName : 'Lurrn',
      pNumber : 2091234567
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
