import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllFavoritesIds } from 'src/app/shared/NgRx/favoriteCharacter/character.selector';
import { RickAndMortyService } from 'src/app/shared/services/rick-and-morty-service.service';
import { Character } from 'src/app/shared/types/app.state';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  characters: any[] = [];
  page = 1;
  searchQuery = '';
  errorMessage: string | null = null;
  maxPage = 0;
  favoriteCharactersId$: Observable<number[]>;

  constructor(private rickAndMortyService: RickAndMortyService, private store: Store) {
    this.favoriteCharactersId$ = this.store.pipe(select(selectAllFavoritesIds));
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.rickAndMortyService.getCharacters(this.page).subscribe((data: any) => {
      this.characters = this.characters.concat(data.results);
    });
  }

  onSearch() {
    this.errorMessage = null;
    this.characters = [];

    const isSearchQueryEmpty = this.searchQuery.trim() === '';

    if (isSearchQueryEmpty) {
      this.page = 0;
    }

    if (!isSearchQueryEmpty) {
      this.searchCharacters();
    } else {
      this.getCharacters();
    }
  }

  private searchCharacters() {
    if (this.searchQuery.trim() !== '') {
      this.rickAndMortyService.searchCharactersByName(this.searchQuery, this.page).subscribe(
        (data: any) => {
          this.characters = this.characters.concat(data.results);
          this.maxPage = data.info.pages;
        },
      );
    }
  }

  onScroll() {
    if (this.searchQuery.trim() === '') {
      this.page++;
      this.getCharacters();
    } else {
      this.searchOnScroll();
    }
  }

  private searchOnScroll() {
    if (this.page <= this.maxPage - 1) {
      this.page++;
      this.searchCharacters();
    }
  }
}
