import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { ResultsPageComponent } from './results-page/results-page.component';

@NgModule({
  declarations: [
    MostPopularComponent,
    ResultsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [
    MostPopularComponent,
    ResultsPageComponent
  ]  
})
export class FeaturesModule { }
