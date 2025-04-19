import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCALSTORAGE_CHARACTERS } from '../model/constants';
import { Character } from '../model/player/player';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private charactersSource = new BehaviorSubject<Character[]>(this.loadCharacters());
  public characters$ = this.charactersSource.asObservable();

  public constructor() { }

  public addCharacter(character: Character) {
    const current = this.charactersSource.getValue();
    const updated = [...current, character];
    this.charactersSource.next(updated);
    this.saveCharacters(updated);
  }

  public deleteCharacter(characterToDelete: Character): Character[] {
    const current = this.charactersSource.getValue();
    const newCharactersArray = current.filter(character => character !== characterToDelete);
    this.charactersSource.next(newCharactersArray);
    this.saveCharacters(newCharactersArray);
    return newCharactersArray;
  }

  private saveCharacters(characters: Character[]) {
    localStorage.setItem(LOCALSTORAGE_CHARACTERS, JSON.stringify(characters));
  }

  public loadCharacters(): Character[] {
    const stored = localStorage.getItem(LOCALSTORAGE_CHARACTERS);
    if (stored) return JSON.parse(stored);
    return [];
  }

  public clearCharacters() {
    this.charactersSource.next([]);
    localStorage.removeItem(LOCALSTORAGE_CHARACTERS);
  }
}
