import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFavorite, addFavorite } from '../../NgRx/favoriteCharacter/character.state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private store: Store) { }
  @Input() character: any;
  @Input() isFavorite: boolean = false;

  toggleFavorite() {
    if (this.isFavorite) {
      this.store.dispatch(removeFavorite({ characterId: this.character.id }));
    } else {
      this.store.dispatch(addFavorite({ character: { ...this.character } }));
    }
    this.isFavorite = !this.isFavorite;

  }

  isCharacterFavorite(): boolean {
    return false;
  }
}
