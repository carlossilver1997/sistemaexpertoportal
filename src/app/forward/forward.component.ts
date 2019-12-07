import { Component, OnInit } from '@angular/core';
import { LiteralesService } from '../literales.service';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.scss']
})
export class ForwardComponent implements OnInit {

  constructor(private literalesService: LiteralesService) { }

  ngOnInit() {
  }

}
