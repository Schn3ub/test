import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestationI } from 'src/app/shared/interfaces/prestation-i';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-page-prestation',
  templateUrl: './page-prestation.component.html',
  styleUrls: ['./page-prestation.component.scss']
})
export class PagePrestationComponent implements OnInit {
  public collection$: Observable<Prestation[]>;
  public collection: Prestation[];
  public header: string[];
  public states = State;
  constructor(private ps: PrestationService) { }

  ngOnInit() {
    this.ps.collection.subscribe((data) => {
      this.collection = data;
    });
    this.header = [
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ]
  }

}
