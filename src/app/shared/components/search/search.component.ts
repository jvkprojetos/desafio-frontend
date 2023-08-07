import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/repositories/local-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filterText: string = ''
  showHistory: boolean = false;
  list: Array<string> = [];

  constructor(private router: Router,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  searchClick(value: string) {
    this.localStorageService.addHistory(value);
    this.router.navigate(['results', value])
  }

  onClick() {
    console.log('ok')
    this.list = this.localStorageService.getHistory().slice(0, 5);
    this.showHistory = !this.showHistory && this.list !== null;
  }

  blur() {
    this.showHistory = false;
  }

  onClickSelected(string: string) {
    this.filterText = string;
    this.showHistory = false;
  }
}
