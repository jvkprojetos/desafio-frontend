import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostPopularComponent } from './features/most-popular/most-popular.component';
import { ResultsPageComponent } from './features/results-page/results-page.component';

const routes: Routes = [
  {
    path: "",
    component: MostPopularComponent
  },
  {
    path: "results/:filter",
    component: ResultsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
