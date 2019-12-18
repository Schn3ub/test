import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientComponent } from './pages/page-client-list/page-client-list.component';
import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [PageClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
