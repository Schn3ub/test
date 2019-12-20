import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { CommentComponent } from '../shared/components/button/comment/comment.component';
import { DetailComponent } from '../shared/components/button/detail/detail.component';
import { PageEdithPrestationComponent } from './pages/page-edith-prestation/page-edith-prestation.component';

const routes: Routes = [
  { path: '',
  component: PagePrestationsComponent,
  data: {title: 'prestation', subtitle: 'Toutes les prestations' },
  children: [
    { path: '', redirectTo: 'comment', pathMatch: 'full'},
    { path: 'comment', component: CommentComponent},
    { path: 'details', component: DetailComponent},
  ]
},
{ path: 'add',
  component: PageAddPrestationComponent,
  data: {title: 'prestation', subtitle: 'Ajouter prestations' }
},
{ path: 'edith',
  component: PageEdithPrestationComponent,
  data: {title: 'prestation', subtitle: 'Editer prestations' }
}
];

@NgModule({
 imports: [
  RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrestationsRoutingModule { }
