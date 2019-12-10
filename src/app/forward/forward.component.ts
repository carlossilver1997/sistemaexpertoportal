import { Component, OnInit } from '@angular/core';
import { LiteralesService } from '../literales.service';
import { Literal } from '../literal';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.scss']
})
export class ForwardComponent implements OnInit {
  literales: Literal[];
  literalesSeleccionadas: Literal[] = [];
  literalesform: FormGroup;
  agregado : string = '';
  repetido : string = '';
  error    : string = '';
  constructor(private literalesService: LiteralesService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reinicioBanderas();
    this.literalesBasicasForward();
  }
  public reinicioBanderas(){
    this.agregado = '';
    this.repetido = '';
    this.error    = '';
  }
  literalesBasicasForward(){
    this.literales = this.literalesService.literales;
  }
  clicked( idx: number ){
    let repetidas = false;
    if (this.literalesSeleccionadas.length > 0) {
      this.literalesSeleccionadas.forEach( value => {
        if(value.definicion === this.literales[idx].definicion){
          repetidas = true;
        }
      })
    } else {
      this.literalesSeleccionadas.push(this.literales[idx]);
      this.agregado = `${this.literales[idx].definicion} agregada`;
      this.repetido = '';
      this.error = '';
    }
   if (!repetidas) {
    this.literalesSeleccionadas.push(this.literales[idx]);
    this.repetido = '';
    this.error = '';
    this.agregado = `${this.literales[idx].definicion} agregada`;
   }else{
    this.error = '';
    this.agregado = '';
     this.repetido = `${this.literales[idx].definicion} ya fue seleccionada`;
   }
  }
  public llenar(){
    this.literalesService.llenar(this.literales)
    .subscribe(
      response => console.log(response),
      error => console.error(error)
    )
  }
}
