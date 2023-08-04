import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  filterText: string = ''
  showHistory: boolean = false;
  list: Array<string> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.list.push('teste1')
    this.list.push('teste2')
    this.list.push('teste3')
  }

  searchClick(value: string) {   
    this.router.navigate(['results', value])
  }

  onClickInput(){
    if(this.showHistory) {
      this.showHistory = false;
      return;
    }

    this.showHistory = true;
  }

  onClickSelected(string: string){
    this.filterText = string;
    this.showHistory = false;
  }
}
