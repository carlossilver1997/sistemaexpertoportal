import { Component, OnInit } from '@angular/core';
import { LiteralesService } from '../literales.service';
import { Literal } from '../literal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.scss']
})
export class ForwardComponent implements OnInit {
  literales: Literal[];
  literalesRespuesta: string[];
  literalesSeleccionadas: Literal[] = [];
  literalesform: FormGroup;
  literal:Literal;
  agregado : string = '';
  repetido : string = '';
  error    : string = '';
  final: string = '';
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
  inferir(){
    if (this.literalesSeleccionadas.length !== 0) {
      
      this.literalesService.inferir(this.literalesSeleccionadas)
      .pipe(
        finalize(
          () => {
            const ultima = this.literalesRespuesta.length-1;
            this.literales.forEach((value, index)=>{
              if(value.nombre === this.literalesRespuesta[ultima]){
               this.literal = value;
              }
            });
            this.error = '';
            this.agregado = '';
            this.repetido = '';
            this.final = `Se infirió ${this.literal.definicion}`
          }
        )
      )
      .subscribe(
        response => this.literalesRespuesta = response,
        error => console.error(error)
      ); 
    } else {
      this.error = `Seleccione al menos una opción`;
      this.agregado = '';
      this.repetido = '';
    }
  }
}
