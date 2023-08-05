import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage: Storage = window.localStorage;
  historys: Array<string>;

  constructor() {
    this.historys = [];
  }

  addHistory(value: string) {
    if(this.historys == null) {
      this.historys = [];
    }
    this.historys.push(value);
    this.storage.setItem('history', JSON.stringify(this.historys));
  }

  getHistory() : string[] {
    const json = this.storage.getItem('history');
    if(json === null) {
      return [];
    }
    return JSON.parse(json) as Array<string>;
  }
}
