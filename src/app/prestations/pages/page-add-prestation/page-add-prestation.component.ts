import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from 'src/app/prestations/services/prestation.service';
@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public init = new Prestation();
  constructor(
    private ps: PrestationService,
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
    this.ps.add(item).subscribe((res) => {
      this.router.navigate(['prestations']); // redirect classique
    });
  }

}
