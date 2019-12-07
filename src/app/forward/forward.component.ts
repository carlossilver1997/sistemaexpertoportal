import { Component, OnInit } from '@angular/core';
import { LiteralesService } from '../literales.service';
import { Literal } from '../literal';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.scss']
})
export class ForwardComponent implements OnInit {
  literales: Literal[]
  constructor(private literalesService: LiteralesService) { }

  ngOnInit() {
    this.literalesBasicasForward();
  }

  literalesBasicasForward(){
    this.literales = this.literalesService.literales;
  }

}
