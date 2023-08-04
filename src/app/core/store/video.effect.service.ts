import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { State, } from './app.reducer';
import { VideoApiService } from '../services/video-api.service';
import { Store } from '@ngrx/store';
import { loadMostPopularVideo, setMostVideo, successloadMostPopularVideo } from './app.actions';

@Injectable({
  providedIn: 'root'
})
export class VideoEffectService {

  constructor(private actions$: Actions,
    private videoApiServices: VideoApiService,
    private store: Store<{ app: State }>) { }

  loadMostPopularVideo = createEffect(
    () => this.actions$.pipe(
      ofType(loadMostPopularVideo),
      switchMap(() => this.videoApiServices.getMostPopular()),
      tap(video => this.store.dispatch(setMostVideo({ payload: video }))),
      map(() => successloadMostPopularVideo())
    )
  )
}
