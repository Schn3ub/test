import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientComponent } from './pages/page-client-list/page-client-list.component';
import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './clients-routing.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients/page-add-clients.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageClientComponent, FormClientComponent, PageAddClientsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
