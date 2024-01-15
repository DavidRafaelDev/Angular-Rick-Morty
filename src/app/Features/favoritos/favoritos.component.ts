import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllFavoriteCharacters } from 'src/app/shared/NgRx/favoriteCharacter/character.selector';
import { Character } from 'src/app/shared/types/app.state';



@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoriteCharacters$: Observable<Character[]>;

  constructor(private store: Store, private router: Router) {
    this.favoriteCharacters$ = this.store.pipe(select(selectAllFavoriteCharacters)
    );
  }
  ngOnInit(): void {
  }

  goToInicio() {
    this.router.navigate(['/']);
  }

}
