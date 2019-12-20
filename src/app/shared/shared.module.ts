import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './derectives/state.directive';
import { TableauLightComponent } from './tableau-light/tableau-light.component';
import { TableauDarkComponent } from './tableau-dark/tableau-dark.component';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonComponent } from './components/button/button.component';
import { RouterLink, RouterModule } from '@angular/router';
import { DetailComponent } from './components/button/detail/detail.component';
import { CommentComponent } from './components/button/comment/comment.component';
import { SousNavComponent } from './components/button/sous-nav/sous-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, ButtonComponent, DetailComponent, CommentComponent, SousNavComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, TemplatesModule, ButtonComponent, DetailComponent, CommentComponent, SousNavComponent, FontAwesomeModule]
})
export class SharedModule { }
