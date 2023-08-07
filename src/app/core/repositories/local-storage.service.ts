import { Injectable } from '@angular/core';
import { Historic  } from "../models/History";
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage: Storage = window.localStorage;
  historicData: Array<Historic> = [];

  constructor() {
  }

  addHistoric(value: string) {
    const history: Historic = {
      value: value,
      date: new Date()
    };

    this.historicData = this.getHistoric() || [];

    let exists = this.historicData.filter(h => h.value === value);
    if(exists.length > 0) {
      return;
    }

    this.historicData.push(history);
    this.storage.setItem('historic', JSON.stringify(this.historicData));
  }

  getHistoric() : Historic[] {
    const json = this.storage.getItem('historic');
    return json === null ? [] : JSON.parse(json) as Array<Historic>;
  }
}
