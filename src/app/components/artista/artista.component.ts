import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {

    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })

  }

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id)
      .subscribe(artista => {
        this.loading = false;
        this.artista = artista;
      })
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(toptracks => {
        this.topTracks = toptracks;
        console.log(toptracks)
      })
  }
}
