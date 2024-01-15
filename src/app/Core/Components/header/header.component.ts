import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectFavoriteCharactersCount } from 'src/app/shared/NgRx/favoriteCharacter/character.selector';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isInicioRoute: boolean = false;
  isFavoritosRoute: boolean = false;
  favoriteCount$: Observable<number>;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store) {
    this.favoriteCount$ = this.store.select(selectFavoriteCharactersCount);

  }


  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      this.isInicioRoute = urlSegments.some(segment => segment.path === 'inicio');
      this.isFavoritosRoute = urlSegments.some(segment => segment.path === 'favoritos');
    });
  }

  goToInicio() {
    this.router.navigate(['']);
  }

  goToFavoritos() {
    this.router.navigate(['favoritos']);
  }
}
