import { Component, OnInit } from '@angular/core';
import { LiteralesService } from '../literales.service';
import { Literal } from '../literal';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.scss']
})
export class ForwardComponent implements OnInit {
  literales: Literal[];
  literalesSeleccionadas: Literal[];
  literalesform: FormGroup;
  constructor(private literalesService: LiteralesService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.literalesBasicasForward();
    this.formulario();
  }
  formulario(){
    const formControl = this.literales.map( control => new FormControl(false));
    this.literalesform = this.formBuilder.group({
      literales: new FormArray(formControl)
    });
  }
  literalesBasicasForward(){
    this.literales = this.literalesService.literales;
  }
  submit() {
    // Filter out the unselected ids
    this.literalesform.value.literales
    .map((checked, index) => checked ? this.literales[index].definicion : null)
    .filter( value => {
      if (value !== null) {
        console.log(value)
      }
    } );
    console.log(this.literalesSeleccionadas);
  }

}
