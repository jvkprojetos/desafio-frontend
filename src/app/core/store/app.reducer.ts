import { createReducer, on } from "@ngrx/store";
import { Video } from "../models/video";
import { setHistoric, setHistoricData, setMostVideo } from "./app.actions";
import { Historic } from "../models/History";

export interface State {
    video: Video;
    historic: string;
    historicData: Historic[];
}

const appInitialState: State = {
    video: {},
    historic: "",
    historicData: []
}

export const appReducer = createReducer(
    appInitialState,
    on(setMostVideo, (state, { payload }) => {
        state = {
            ...state,
            video: payload
        }

        return state;
    }),
    on(setHistoric, (state, { payload }) => {
        state = {
            ...state,
            historic: payload
        }

        return state;
    }),
    on(setHistoricData, (state, { payload }) => {
        state = {
            ...state,
            historicData: payload
        }

        return state;
    })
)