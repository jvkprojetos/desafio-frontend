import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/repositories/local-storage.service';
import { Historic } from 'src/app/core/models/History';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filterText: string = ''
  showHistoric: boolean = false;
  historicData: Array<Historic> = [];

  constructor(private router: Router,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  searchExecute(value: string) {
    this.showHistoric = false;
    this.localStorageService.addHistoric(value);
    this.router.navigate(['results', value])
  }

  focusExecute() {
    console.log(this.showHistoric)
    this.historicData = this.localStorageService.getHistoric()
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .slice(0, 10);
    console.log(this.historicData)
    this.showHistoric = !this.showHistoric && this.historicData !== null;
  }

  selectedItemHistoricExecute(itemHistoricSelected: Historic) {
    this.filterText = itemHistoricSelected.value;
    this.showHistoric = false;
  }
}
