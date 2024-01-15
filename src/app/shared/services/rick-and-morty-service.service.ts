import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<any> {
    const url = `${this.apiUrl}/?page=${page}`;
    return this.http.get(url);
  }

  searchCharactersByName(name: string, page: number): Observable<any> {
    const url = `${this.apiUrl}/?name=${name}&page=${page}`;
    return this.http.get(url);
  }
}
