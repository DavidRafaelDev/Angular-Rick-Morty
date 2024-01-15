import { createAction, props } from '@ngrx/store';
import { Character } from '../../types/app.state';

export const addFavorite = createAction('[Character] Add Favorite', props<{ character: Character }>());
export const removeFavorite = createAction('[Character] Remove Favorite', props<{ characterId: number }>());

