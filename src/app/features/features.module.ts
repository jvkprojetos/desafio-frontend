import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { ResultsPageComponent } from './results-page/results-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    MostPopularComponent,
    ResultsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [
    HomeComponent,
    MostPopularComponent,
    ResultsPageComponent
  ]  
})
export class FeaturesModule { }
