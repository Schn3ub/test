import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientListComponent } from './pages/page-client-list/page-client-list.component';

const routes: Routes = [
  { path: '', component: PageClientListComponent }
];

@NgModule({
 imports: [
  RouterModule.forChild(routes)
  ]
})
export class ClientRoutingModule { }
