import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IFilmMeta, SWAPI } from './swapi.service';

@Component({
  selector: 'starships',
  templateUrl: 'starshipList.html'
})
export class StarshipListComponent {
  starships: Observable<IFilmMeta[]>;

  constructor(api: SWAPI) {
    this.starships = api.starships();
  }
}
