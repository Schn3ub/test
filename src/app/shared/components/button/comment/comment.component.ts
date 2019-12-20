import { Component, OnInit } from '@angular/core';
import { PrestationService } from 'src/app/prestations/services/prestation.service';
import { Subject } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  public firstPresta$: Subject<Prestation>;

  constructor(private ps: PrestationService) { }

  ngOnInit() {
    console.log(this.ps.firstPresta$);
  }

}
