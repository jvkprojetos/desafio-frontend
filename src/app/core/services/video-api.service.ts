import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Video } from '../models/video';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoApiService {
  private apiUrl = `${environment.baseApiUrl}/videos`;

  constructor(private http: HttpClient) {}

  getMostPopular(): Observable<Video> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('chart', 'mostPopular')
      .set('maxResults', '5')
      .set('regionCode', 'BR')
      .set('key', environment.apiKey);

    return this.http.get<Video>(this.apiUrl, { params })
      .pipe(catchError((error) => {
        console.error('Erro ao obter vídeos em alta:', error);
        return [];
      })
    );
  }
}
