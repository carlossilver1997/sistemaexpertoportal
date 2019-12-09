import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experto',
  templateUrl: './experto.component.html',
  styleUrls: ['./experto.component.scss']
})
export class ExpertoComponent implements OnInit {
  forward: boolean;
  backward: boolean;
  constructor() { }

  ngOnInit() {
    this.forward = true;
    this.backward = false;
  }

  

}
