import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CardVideoComponent } from './components/card-video/card-video.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CardVideoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    CardVideoComponent
  ]
})

export class SharedModule { }
