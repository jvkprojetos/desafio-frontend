import { createReducer, on } from "@ngrx/store";
import { Video } from "../models/video";
import { setMostVideo } from "./app.actions";

export interface State {
    video: Video;
}

const appInitialState: State = {
    video: {}
}

export const appReducer = createReducer(
    appInitialState,
    on(setMostVideo, (state, { payload }) => {
        state = {
            ...state,
            video: payload
        }

        return state;
    })
)