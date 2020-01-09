import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  values = '';
  flip = false;
  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    alert('You clicked me');
  }

  switch(v) {
    this.flip = !this.flip;
    v.innerText = this.flip ? 'Off' : 'On';
    }
  }
