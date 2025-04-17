import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../model/player/player';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private charactersSource = new BehaviorSubject<Character[]>([]);
  public characters$ = this.charactersSource.asObservable();

  public constructor() { }

  public addCharacter(character: Character) {
    const current = this.charactersSource.getValue();
    this.charactersSource.next([...current, character]);
  }
}
