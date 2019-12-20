import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from 'src/app/prestations/services/prestation.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-page-edith-prestation',
  templateUrl: './page-edith-prestation.component.html',
  styleUrls: ['./page-edith-prestation.component.scss']
})
export class PageEdithPrestationComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public init$ = new Observable<Prestation>();
  public id: string;
  constructor(
    private ps: PrestationService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit() {
    this.init$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get('id');
        return this.ps.getItemById(params.get('id'))
      }
      )
    );

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

  public updateItemNikki(item: any) {
    item.id = this.id;
    this.ps.update(item).subscribe((data) => {
      this.router.navigate(['prestations']);
    });
  }

}
