import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './character.state';
import { AppState } from '../../types/app.state';

export const initialState: AppState = {
    characters: [],
}

export const charactersReducer = createReducer(
    initialState,
    on(addFavorite, (state, { character }) => ({ ...state, characters: [...state.characters, character] })),
    on(removeFavorite, (state, { characterId }) =>
        ({ ...state, characters: state.characters.filter(character => character.id !== characterId) })
    )
)
