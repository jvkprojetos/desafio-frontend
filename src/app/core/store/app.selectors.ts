import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./app.reducer";

export const selectApp = createFeatureSelector<State>('app');

export const detailsVideos = createSelector(
    selectApp,
    (state) => {
        return state.video?.items
    }
)

export const historyDataOrderByDate = createSelector(
    selectApp,
    (state) => {
        return state.historicData.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }
)

export const latestTop10InHistory = createSelector(
    historyDataOrderByDate,
    (state) => {
        return state.slice(0, 10)
    }
)