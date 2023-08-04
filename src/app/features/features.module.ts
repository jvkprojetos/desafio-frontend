import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MostPopularComponent } from './most-popular/most-popular.component';

@NgModule({
  declarations: [
    HomeComponent,
    MostPopularComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [
    HomeComponent,
    MostPopularComponent
  ]  
})
export class FeaturesModule { }
