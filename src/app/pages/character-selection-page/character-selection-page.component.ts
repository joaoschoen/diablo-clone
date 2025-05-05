import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { CharacterService } from '@services/character/character.service';
import { Character } from '../../model/player/player';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-character-selection-page',
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule, MatFormFieldModule, RouterModule],
  templateUrl: './character-selection-page.component.html',
})
export class CharacterSelectionPageComponent implements OnDestroy {
  public characterService = inject(CharacterService)

  public characterSelected = computed(() => {
    if (this.characterService.selectedCharacter() !== undefined) {
      return true
    }
    return false
  })

  private router = inject(Router);

  public currentClass = computed(() => {
    let selectedCharacter = this.characterService.selectedCharacter()
    if (selectedCharacter === undefined) {
      return "none"
    } else {
      return selectedCharacter.class.className.toLowerCase()
    }
  })

  isSelected(character: Character) {
    let selectedCharacter = this.characterService.selectedCharacter()
    if (selectedCharacter !== undefined) {
      if (selectedCharacter.id === character.id) {
        return true
      }
    }
    return false
  }

  public characterImageClass(characterClass: string) {
    let classes = "absolute w-auto bottom-0 self-center"
    if (characterClass === "paladin") {
      classes += " h-[25%]"
    } else {
      classes += " h-[85%]"
    }
    return classes
  }

  public constructor() { }


  ngOnDestroy(): void {
    this.characterService.selectCharacter(undefined)
  }

  public selectCharacter(event: Event, characterSelected: Character) {
    event.preventDefault();
    event.stopPropagation();
    this.characterService.selectCharacter(characterSelected)
  }

  public handleBackToHome() {
    this.router.navigate(['/']);
  }

  public deleteCharacter() {
    this.characterService.deleteCharacter();
  }

  public newCharacter() {
    this.router.navigate(['/character-creation']);
  }

  public startTheGame() {
    if (this.characterService.selectedCharacter() !== undefined) {
      this.router.navigate(['/game']);
    }
  }
}
