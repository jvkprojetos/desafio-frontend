import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./app.reducer";

export const selectApp = createFeatureSelector<State>('app');

export const detailsVideos = createSelector(
    selectApp,
    (state) => {
        return state.video?.items
    }
)