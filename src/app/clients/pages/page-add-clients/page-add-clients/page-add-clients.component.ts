import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from 'src/app/clients/services/client.service';


@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrls: ['./page-add-clients.component.scss']
})
export class PageAddClientsComponent implements OnInit {
    public title: string;
    public subtitle: string;
    public init = new Client();

    constructor(
      private cs: ClientService,
      private route: ActivatedRoute,
      private router: Router,
    ) { }

  ngOnInit() {
    this.route.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    });
  }

  public addItemNikki(item: any) {
    this.cs.add(item).subscribe((res) => {
      this.router.navigate(['clients']); // redirect classique
    });
  }

}
