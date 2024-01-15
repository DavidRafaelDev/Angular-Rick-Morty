export interface AppState {
    characters: Character[];
}
export interface Character {
    id: number;
    name: string;
    species: string;
    isFavorite: boolean;
}