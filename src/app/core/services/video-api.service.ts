import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Video } from '../models/video';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class VideoApiService {
  private apiUrl = `${environment.baseApiUrl}`;

  constructor(private http: HttpClient) {}

  getMostPopular(): Observable<Video> { 
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('chart', 'mostPopular')
      .set('maxResults', '15')
      .set('regionCode', 'BR')
      .set('key', environment.apiKey);

    return this.http.get<Video>(`${this.apiUrl}/videos`, { params })
      .pipe(catchError((error) => {
        console.error('Erro ao obter vídeos em alta:', error);
        return [];
      })
    );
  }

  getFilter(value: string): Observable<Video> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '30')
      .set('q', value)
      .set('key', environment.apiKey);

    return this.http.get<Video>(`${this.apiUrl}/search`, { params })
      .pipe(catchError((error) => {
        console.error('Erro ao obter vídeos filtrados:', error);
        return [];
      })
    );
  }
}
