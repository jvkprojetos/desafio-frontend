import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/store/app.reducer';
import { loadMostPopularVideo, loadSearchVideo } from 'src/app/core/store/app.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    
  constructor(private store: Store<{ app: State}> ) { }

  ngOnInit(): void {
  }

  searchClick(value: string) {   
    this.store.dispatch(loadSearchVideo({ payload: value }));
  }
}
