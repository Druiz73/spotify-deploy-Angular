import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  busqueda = []; //en el curso declara :any [] eso me da error
  constructor(private spotify: SpotifyService) { }
  loading : boolean;
  buscar(termino: string) {
    this.loading=true;
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      this.busqueda = data;
      console.log(this.busqueda)
      this.loading=false;
    })
  }
}
