import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public init = new Login();


  constructor(
    //private ps: LoginService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
