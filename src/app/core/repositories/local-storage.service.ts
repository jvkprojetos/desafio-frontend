import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage: Storage = window.localStorage;
  historys: Array<string> = [];

  constructor() {
  }

  addHistory(value: string) {
    this.historys = this.getHistory() || [];
    this.historys.push(value);
    this.storage.setItem('history', JSON.stringify(this.historys));
  }

  getHistory() : string[] {
    const json = this.storage.getItem('history');
    return json === null ? [] : JSON.parse(json) as Array<string>;
  }
}
