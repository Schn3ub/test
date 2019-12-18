import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientComponent } from './pages/page-client-list/page-client-list.component';

const routes: Routes = [
  { path: '', component: PageClientComponent }
];

@NgModule({
 imports: [
  RouterModule.forChild(routes)
  ]
})
export class ClientRoutingModule { }
