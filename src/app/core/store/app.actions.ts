import { createAction, props } from "@ngrx/store";
import { Video } from "../models/video";

export const loadMostPopularVideo = createAction('[Populares] Buscar os vídeos populares');
export const successloadMostPopularVideo = createAction('[Populares] Sucesso ao buscar os vídeos populares');
export const setMostVideo = createAction('[Populares] Insere vídeos populares', props<{ payload: Video }>());

export const loadSearchVideo = createAction('[Filtro] Buscar os vídeos pelo filtro', props<{ payload: string }>());
export const successloadSearchVideo = createAction('[Filtro] Sucesso ao buscar os vídeos pelo filtro');

