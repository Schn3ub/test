import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationComponent } from './pages/page-prestation/page-prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PagePrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationModule { }
