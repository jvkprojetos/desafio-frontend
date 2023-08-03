import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onClick = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  searchClick(value: string) {   
    this.onClick.emit(value);
  }
}
