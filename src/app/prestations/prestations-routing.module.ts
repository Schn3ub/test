import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationComponent } from './pages/page-prestation/page-prestation.component';

const routes: Routes = [
  { path: '', component: PagePrestationComponent }
];

@NgModule({
 imports: [
  RouterModule.forChild(routes)
  ]
})
export class PrestationsRoutingModule { }
