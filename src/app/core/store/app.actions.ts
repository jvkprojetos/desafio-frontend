import { createAction, props } from "@ngrx/store";
import { Video } from "../models/video";
import { Historic } from "../models/History";

export const loadMostPopularVideo = createAction('[Populares] Buscar os vídeos populares');
export const successloadMostPopularVideo = createAction('[Populares] Sucesso ao buscar os vídeos populares');
export const setMostVideo = createAction('[Populares] Insere vídeos populares', props<{ payload: Video }>());

export const loadSearchVideo = createAction('[Filtro] Buscar os vídeos pelo filtro', props<{ payload: string }>());
export const successloadSearchVideo = createAction('[Filtro] Sucesso ao buscar os vídeos pelo filtro');

export const setHistoric = createAction('[Historic] Insere registro no historico', props<{ payload: string }>());
export const successSetHistoric = createAction('[Historic] Sucesso ao inserir registro no historico');

export const setHistoricData = createAction('[Historic] Insere registro na lista de historico', props<{ payload: Historic[] }>());
export const loadHistoricData = createAction('[Historic] Buscar registro na lista historico');
export const successLoadHistoricData = createAction('[Historic] Sucesso ao buscar registro na lista historico');
