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
  styleUrl: './character-selection-page.component.css'
})
export class CharacterSelectionPageComponent implements OnDestroy {
  public characterService = inject(CharacterService)

  public currentClass: string = 'none';
  public characterSelected = computed(() => {
    if (this.characterService.selectedCharacter() !== undefined) {
      return true
    }
    return false
  })

  private router = inject(Router);

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
