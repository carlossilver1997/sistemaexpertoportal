import { Injectable } from '@angular/core';
import { Literal } from './literal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LiteralesService {
  literales: Literal[] = [
    {valor: 2, negada: null, basica: true, nombre: 'A' , definicion: 'El pedal se va al fondo'},
    {valor: 2, negada: null, basica: true, nombre: 'B', definicion: 'El pedal esta duro'},
    {valor: 2, negada: null, basica: true, nombre: 'C', definicion: 'El vehiculo no frena'},
    {valor: 2, negada: null, basica: true, nombre: 'D', definicion: 'Inestabilidad en el motor'},
    {valor: 2, negada: null, basica: true, nombre: 'E', definicion: 'Al frenar genera un ruido molesto'},
    {valor: 2, negada: null, basica: true, nombre: 'F', definicion: 'Demora al frenar un poco más de lo normal'},
    {valor: 2, negada: null, basica: true, nombre: 'G', definicion: 'Los discos o tambores presentan deformidades'},
    {valor: 2, negada: null, basica: true, nombre: 'H', definicion: 'Las balatas tienen 3mm de vida'},
    {valor: 2, negada: null, basica: true, nombre: 'I', definicion: 'Presenta fuga de líquidos de frenos en el cilindro maestro'},
    {valor: 2, negada: null, basica: true, nombre: 'J', definicion: 'El pedal se siente blando y no frena'},
    {valor: 2, negada: null, basica: true, nombre: 'K', definicion: 'El pedal del clutch no corta las velocidades aun cuando es presionado'},
    {valor: 2, negada: null, basica: true, nombre: 'L', definicion: 'Debajo del vehículo (en el suelo) deja un charco de líquido de frenos'},
    {valor: 2, negada: null, basica: true, nombre: 'M', definicion: 'El nivel de líquido de clutch baja considerablemente'},
    {valor: 2, negada: null, basica: true, nombre: 'N', definicion: 'No permite cambiar de velocidad (la bota)'},
    {valor: 2, negada: null, basica: true, nombre: 'O', definicion: 'A la hora de meter una velocidad la palanca genera un ruido molesto'},
    {valor: 2, negada: null, basica: true, nombre: 'P', definicion: 'Al conducir genera un zumbido en la rueda donde se encuentra el balero dañado'},
    {valor: 2, negada: null, basica: true, nombre: 'Q', definicion: 'Al extraer el balero se puede percibir que los balines están quemados y con falta de grasa'},
    {valor: 2, negada: null, basica: true, nombre: 'R', definicion: 'El pedal de frenar se regresa al presionarlo'},
    {valor: 2, negada: null, basica: true, nombre: 'T', definicion: 'Físicamente los componentes se ven deformes'},
    {valor: 2, negada: null, basica: true, nombre: 'U', definicion: 'Las balatas no generan contacto por completo con los discos o tambores'},
    {valor: 2, negada: null, basica: true, nombre: 'V', definicion: 'El nivel de líquido de frenos baja considerablemente '},
    {valor: 2, negada: null, basica: true, nombre: 'W', definicion: 'En los frenos rastro de líquido de frenos dentro y fuera del tambor'},
    {valor: 2, negada: null, basica: true, nombre: 'X', definicion: 'El vehículo no avanza al colocar la primera velocidad y soltar el pedal del clutch'},
    {valor: 2, negada: null, basica: true, nombre: 'Y', definicion: 'El vehículo vibra en general al ir soltando el pedal del clutch'},
    {valor: 2, negada: null, basica: true, nombre: 'Z', definicion: 'El vehículo avanza despacio después de soltar el pedal del clutch y acelerar a fondo'},
    {negada: null,valor: 2, basica: true, nombre: 'AA', definicion: 'Humo azul'},
    {negada: null,valor: 2, basica: true, nombre: 'AB', definicion: 'Motor inestable'},
    {negada: null,valor: 2, basica: true, nombre: 'AC', definicion: 'Pérdida de potencia'},
    {negada: null,valor: 2, basica: true, nombre: 'AD', definicion: 'Enciende testigo de avería'},
    {negada: null,valor: 2, basica: true, nombre: 'AE', definicion: 'El motor comienza a generar un ruido de golpeteo'},
    {negada: null,valor: 2, basica: true, nombre: 'AF', definicion: 'El agua no circula'},
    {negada: null,valor: 2, basica: true, nombre: 'AG', definicion: 'El vehículo se sobrecalienta'},
    {negada: null,valor: 2, basica: true, nombre: 'AH', definicion: 'Testigo de temperatura encendido'},
    {negada: null,valor: 2, basica: true, nombre: 'AJ', definicion: 'El agua no circula'},
    {negada: null,valor: 2, basica: true, nombre: 'AK', definicion: 'La manguera de enfriamiento de salida conserva alta temperatura'},
    {negada: null,valor: 2, basica: true, nombre: 'AL', definicion: 'La manguera de enfriamiento de entrada conserva baja temperatura'},
    {negada: null,valor: 2, basica: true, nombre: 'AM', definicion: 'El motor demora en aumentar su temperatura correcta'},
    {negada: null,valor: 2, basica: true, nombre: 'AN', definicion: 'El motor no logra liberar presión en el momento adecuado'},
    {negada: null,valor: 2, basica: true, nombre: 'AO', definicion: 'Deja rastro de anticongelante'},
    {negada: null,valor: 2, basica: true, nombre: 'AP', definicion: 'Manguera o tubos dañados (rotos)'},
    {negada: null,valor: 2, basica: true, nombre: 'AQ', definicion: 'Empaque de algún componente fisurado'},
    {negada: null,valor: 2, basica: true, nombre: 'AR', definicion: 'Bajo nivel de agua (anticongelante)'},
    {negada: null,valor: 2, basica: true, nombre: 'AS', definicion: 'El vehículo se sobrecalienta'},
    {negada: null,valor: 2, basica: true, nombre: 'AT', definicion: 'El motor se encuentra inestable (las revoluciones por minuto bajan drásticamente)'},

    {negada: null, valor: 2, basica: false, nombre: 'BV', definicion: 'Cilindro maestro dañado'},
    {negada: null, valor: 2, basica: false, nombre: 'BW', definicion: 'Cilindro esclavo o bomba de clutch dañada (Sustituir)'},
    {negada: null, valor: 2, basica: false, nombre: 'BX', definicion: 'Sincronizadores de transmisión dañados (Sustituir)'},
    {negada: null, valor: 2, basica: false, nombre: 'BY', definicion: 'Balero de rueda dañado (sustituir)'},
    {negada: null, valor: 2, basica: false, nombre: 'BZ', definicion: 'Discos y/o tambores y balatas con deformidades'},
    {negada: null, valor: 2, basica: false, nombre: 'CA', definicion: 'Cilindro de tambor de frenos dañado (sustituir)'},
    {negada: null, valor: 2, basica: false, nombre: 'CB', definicion: 'Transmisión estándar: Desgaste de clutch o clutch quemado (sustituir)'},
    {negada: null,valor: 2, basica: false, nombre: 'CC', definicion: 'Fallo en anillos (sustituir)'},
    {negada: null,valor: 2, basica: false, nombre: 'CD', definicion: 'Falta de presión de aceite'},
    {negada: null,valor: 2, basica: false, nombre: 'CE', definicion: 'Bomba de agua dañada'},
    {negada: null,valor: 2, basica: false, nombre: 'CF', definicion: 'Termostato pegado'},
    {negada: null,valor: 2, basica: false, nombre: 'CG', definicion: 'Fuga de enfriamiento'},
    {negada: null,valor: 2, basica: false, nombre: 'CH', definicion: 'Válvula IAC dañada (sustituir)'},
    {negada: null,valor: 2, basica: false, nombre: 'CI', definicion: 'Inyector dañado'},
    {negada: null,valor: 2, basica: false, nombre: 'CJ', definicion: 'Problema en los ventiladores'},
    {negada: null,valor: 2, basica: false, nombre: 'CK', definicion: 'Motor: Bomba de gasolina dañada (sustituir)'},
    {negada: null,valor: 2, basica: false, nombre: 'CL', definicion: 'Sensor de cigüeñal (sustituir)'},
    {negada: null,valor: 2, basica: false, nombre: 'CM', definicion: 'Bujías dañadas (sustituir)'},
    {negada: null, valor: 2, basica: false, nombre: 'CN', definicion: 'Empaque de cabeza bloque dañado'},
    {negada: null,valor: 2, basica: true, nombre: 'AI', definicion: 'La polea de la bomba está dañada (genera ruidos extraños)'},//Modificado
    {negada: null,valor: 2, basica: true, nombre: 'AV', definicion: 'Se apaga el motor'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'AW', definicion: 'Mezcla pobre de gasolina'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'AX', definicion: 'Falla de cilindro'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'AY', definicion: 'Pérdida de potencia'},//Agregado
     {negada: null,valor: 2, basica: true, nombre: 'AZ', definicion: 'Excesivo gasto de combustible'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BA', definicion: 'Humo negro en el escape'},//Agregado
	  {negada: null,valor: 2, basica: true, nombre: 'BB', definicion: 'Los ventiladores nunca encienden'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BC', definicion: 'El motor se sobrecalienta'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BD', definicion: 'Enciende el testigo de temperatura'},//Agregado
	  {negada: null,valor: 2, basica: true, nombre: 'BE', definicion: 'No enciende el vehículo'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BF', definicion: 'Baja presión de combustible'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BG', definicion: 'Pérdida de potencia al conducir'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BH', definicion: 'Se apaga y tarda en volver a encender'},//Agregado
	  {negada: null,valor: 2, basica: true, nombre: 'BI', definicion: 'No enciende el vehículo'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BJ', definicion: 'Pérdida de potencia'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BK', definicion: 'Se registra código de avería'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BL', definicion: 'Problema en el arranque'},//Agregado
	  {negada: null,valor: 2, basica: true, nombre: 'BM', definicion: 'Problema en el arranque'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BN', definicion: 'Pérdida de potencia'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BO', definicion: 'Aumento del consumo de combustible'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BP', definicion: 'Bujías físicamente desgastadas'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BQ', definicion: 'Demora en encender después de un tiempo apagado'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BR', definicion: 'El escape expide humo blanco o azul'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BS', definicion: 'Falla en algún cilindro'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'BT', definicion: 'Alguna bujía está bañada de aceite o tiene color blanco'},//Agregado
    {negada: null,valor: 2, basica: true, nombre: 'AU', definicion: 'Problemas de encendido'},//Agregado
    {negada: null,valor: 2, basica: false, nombre: 'CM', definicion: 'Bujías dañadas (sustituir)'},//Agregado
    {negada: null, valor: 2, basica: false, nombre: 'CN', definicion: 'Empaque de cabeza bloque dañado'},
    {negada: null,valor: 2, basica: false, nombre: 'CO', definicion: 'Booster dañado(sustituir)'},
    {negada: null,valor: 2, basica: false, nombre: 'CP', definicion: 'Balatas gastadas(sustituir)'}//Agregado
  ]
  constructor( private http: HttpClient ) { }
  public mostrarLiterale(): Literal[]{
    return this.literales;
  }
  public llenar(literales: Literal[]): Observable<any>{
    return this.http.post('http://localhost:8080/literal/hechos', literales);
  }
  public inferir(literalesSeleccionadas:Literal[]): Observable<any>{
    return this.http.post('http://localhost:8080/literal/forward', literalesSeleccionadas);
  }
}
