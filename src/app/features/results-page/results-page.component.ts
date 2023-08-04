import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadSearchVideo } from 'src/app/core/store/app.actions';
import { State } from 'src/app/core/store/app.reducer';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})

export class ResultsPageComponent {

  filter: string = '';
  text: string = '';

  constructor(private route: ActivatedRoute, private store: Store<{ app: State}>,){
    this.route.params.subscribe(params => {
      this.filter = params['filter'];
      this.text = `Resultados encontrados para: ${this.filter}`
      this.store.dispatch(loadSearchVideo({ payload: this.filter }));
    })
  }
}
