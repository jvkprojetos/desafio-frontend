import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadHistoricData, setHistoric, setHistoricData, successLoadHistoricData, successSetHistoric } from './app.actions';
import { map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from './app.reducer';
import { LocalStorageService } from '../repositories/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HistoricEffectService {

  constructor(private actions$: Actions,
              private store: Store<{ app: State }>,
              private storage: LocalStorageService) { }

  registerHistoric = createEffect(
    () => this.actions$.pipe(
      ofType(setHistoric),
      switchMap(async value => this.storage.addHistoric(value.payload)),
      tap(() => this.store.dispatch(loadHistoricData())),
      map(() => successSetHistoric())
    )
  )

  loadHistoric = createEffect(
    () => this.actions$.pipe(
      ofType(loadHistoricData),
      switchMap(async () => this.storage.getHistoric()),
      tap(historicData => this.store.dispatch(setHistoricData({ payload: historicData }))),
      map(() => successLoadHistoricData())
    )
  )
}
