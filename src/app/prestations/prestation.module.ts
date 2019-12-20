import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageEdithPrestationComponent } from './pages/page-edith-prestation/page-edith-prestation.component';


@NgModule({
  declarations: [PageAddPrestationComponent, FormPrestationComponent, PagePrestationsComponent, PageEdithPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationModule { }
