import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';
import { Stateclient } from 'src/app/shared/enums/stateclient.enum';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client-list.component.html',
  styleUrls: ['./page-client-list.component.scss']
})
export class PageClientComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public collection: Client[];
  public headers: string[];
  public states = Stateclient;
  title: string;
  subtitle: string;
  constructor(private ps: ClientService) { }

  ngOnInit() {
    this.ps.collection.subscribe((data) => {
      this.collection = data;
    });
    this.headers = [
      'Nom',
      'Email',
      'Image',
      'state',
    ];
    this.title = 'Clients';
    this.subtitle = 'Tous les clients';
  }

  changeState(itemNikki: Client, event) {
    // console.log(event.target.value);
    this.ps.update(itemNikki, event.target.value).subscribe((res: Client) => {
      // console.log(res);
      itemNikki.state = res.state;
    });
  }

}
