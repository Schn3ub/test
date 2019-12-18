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
  public headers: string[];
  public title: string;
  public subtitle: string;
  public states = State;
  constructor(private ps: PrestationService) { }

  ngOnInit() {
    this.ps.collection.subscribe((data) => {
      this.collection = data;
    });
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];

    this.title = 'Prestations';
    this.subtitle = 'Toutes les prestations';
  }

  changeState(itemNikki: Prestation, event) {
    // console.log(event.target.value);
    this.ps.update(itemNikki, event.target.value).subscribe((res: Prestation) => {
      // console.log(res);
      itemNikki.state = res.state;
    });
  }

}
