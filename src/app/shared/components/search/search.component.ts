import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Historic } from 'src/app/core/models/History';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/store/app.reducer';
import { loadHistoricData, setHistoric } from 'src/app/core/store/app.actions';
import { latestTop10InHistory } from 'src/app/core/store/app.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filterText: string = ''
  showHistoric: boolean = false;
  historicData$ = this.store.select(latestTop10InHistory);

  constructor(private router: Router,
              private store: Store<{ app: State}>) { }

  ngOnInit(): void {
    this.store.dispatch(loadHistoricData())
  }

  searchExecute(value: string) {
    this.showHistoric = false;
    this.store.dispatch(setHistoric({ payload: value }));
    this.router.navigate(['results', value])
  }

  focusExecute() {
    this.showHistoric = !this.showHistoric && this.historicData$ !== null;
  }

  selectedItemHistoricExecute(itemHistoricSelected: Historic) {
    this.filterText = itemHistoricSelected.value;
    this.showHistoric = false;
  }
}
