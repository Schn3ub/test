import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  private version: number;
  public faCoffee = faCoffee;
  constructor(private vs: VersionService) { }
  ngOnInit() {
    this.title = 'Crm Form';
    this.version = this.vs.version;
  }
}
