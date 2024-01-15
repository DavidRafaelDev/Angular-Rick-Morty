import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, Character } from "../../types/app.state";


export const selectCharactersState = createFeatureSelector<AppState>('characters');

export const selectFavoriteCharactersCount = createSelector(
    selectCharactersState,
    (state) => state.characters.length
);


export const selectAllFavoriteCharacters = createSelector(
    selectCharactersState,
    (state) => state.characters
)

export const selectAllFavoritesIds = createSelector(
    (state: AppState) => state.characters,
    (characters: Character[]) => {
        return characters.filter(char => char.isFavorite).map(char => char.id);
    }
);