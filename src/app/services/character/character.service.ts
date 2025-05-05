import { Injectable, signal } from '@angular/core';
import { LOCALSTORAGE_CHARACTERS } from '@model/constants';
import { Equipment } from '@model/item/equipment';
import { Character } from '@model/player/player';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  public characters = signal<Character[]>([])
  public selectedCharacter = signal<Character | undefined>(undefined)

  public constructor() {
    this.loadCharacters()
  }

  public addCharacter(character: Character) {
    this.characters.update((old) => {
      return [...old, character]
    })
    this.saveCharacters();
  }

  public selectCharacter(character: Character | undefined) {
    this.selectedCharacter.set(character)
  }

  public canEquip(item: Equipment) {
    // TODO
    return true
  }

  public canDualWield(item: Equipment) {
    // TODO
    return false
  }

  public deleteCharacter() {
    if (this.selectedCharacter() !== undefined) {
      this.characters.update((old_list) => {
        let character_id = this.selectedCharacter()!.id
        // console.log(character_id)
        let updated_list = [...old_list]
        let index = updated_list.findIndex((character) => {
          if (character.id === character_id) {
            return true
          } else {
            return false
          }
        })
        updated_list.splice(index, 1)
        return updated_list
      })
      this.selectCharacter(undefined)
    }

  }

  private saveCharacters() {
    localStorage.setItem(LOCALSTORAGE_CHARACTERS, JSON.stringify(this.characters()));
  }

  public loadCharacters() {
    const stored = localStorage.getItem(LOCALSTORAGE_CHARACTERS);
    if (stored) {
      this.characters.set(JSON.parse(stored) as Character[])
    }
  }
}
