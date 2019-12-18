import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './derectives/state.directive';
import { TableauLightComponent } from './tableau-light/tableau-light.component';
import { TableauDarkComponent } from './tableau-dark/tableau-dark.component';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, TemplatesModule]
})
export class SharedModule { }
