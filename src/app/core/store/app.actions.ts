import { createAction, props } from "@ngrx/store";
import { Video } from "../models/video";

export const loadMostPopularVideo = createAction('[Video] Buscar os vídeos populares');
export const successloadMostPopularVideo = createAction('[Video] Sucesso ao buscar os vídeos populares');
export const setMostVideo = createAction('[Video] Insere vídeos populares', props<{ payload: Video }>());