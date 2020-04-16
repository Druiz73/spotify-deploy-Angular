import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { console.log('spotify funca') }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC90R4k3dan8rAzwYnA8ViUeZ8Q1c6KayhRKRRARvmJOD0i3w_3bcfKRzv5slF9c32iYyCQrhtDc2ujVdE'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')

    //en el curso utiliza un map para filtrar los albums que trae esta query, a mi no me anda
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data=>data['artists'].items))

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`)

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=Ar`)
      .pipe(map(data => data['tracks']));

  }
}
