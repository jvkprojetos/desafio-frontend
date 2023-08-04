import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMostPopularVideo } from 'src/app/core/store/app.actions';
import { State } from 'src/app/core/store/app.reducer';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {
  
  constructor(private store: Store<{ app: State  }>) { }
  
  ngOnInit(): void {
    this.store.dispatch(loadMostPopularVideo());
  }

}
