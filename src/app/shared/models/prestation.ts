import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';
export class Prestation implements PrestationI {
  nbJour: number;
  id: number;
  typePresta: string;
  client: string;
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = State.OPTION;
  comments: string;
  constructor(obj?: Partial<Prestation>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTtc(): number {
    if (this.tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * (1 + this.tva / 100);
  }
}
