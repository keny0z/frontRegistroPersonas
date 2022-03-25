import { Persona } from './persona';
import { TipoMovimiento } from './tipo-movimiento';
export class Movimiento {

    idMovimiento: number;
    tipoMovimiento: TipoMovimiento;
    persona: Persona;
    fecha: Date;
    tiempo: number;


}
