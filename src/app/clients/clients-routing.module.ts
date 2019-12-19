import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientComponent } from './pages/page-client-list/page-client-list.component';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients/page-add-clients.component';

const routes: Routes = [
  { path: '',
  component: PageClientComponent,
  data: {title: 'client', subtitle: 'Tous les clients' }
  },
  { path: 'add',
  component: PageAddClientsComponent,
  data: {title: 'client', subtitle: 'Ajouter client' }
  }
];

@NgModule({
 imports: [
  RouterModule.forChild(routes)
  ]
})
export class ClientRoutingModule { }
