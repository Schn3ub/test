import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientListComponent } from './pages/page-client-list/page-client-list.component';
import { ClientRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [PageClientListComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientsModule { }
