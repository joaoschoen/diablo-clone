import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { CharacterService } from '@services/character/character.service';
import { Subject } from 'rxjs';
import { Character } from '../../model/player/player';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-character-selection-page',
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule, MatFormFieldModule, RouterModule],
  templateUrl: './character-selection-page.component.html',
  styleUrl: './character-selection-page.component.css'
})
export class CharacterSelectionPageComponent implements OnInit, OnDestroy {

  public characters: Character[] = [];
  public currentClass: string = 'none';
  public currentCharacter: Character | null = null;
  private destroy$ = new Subject<boolean>();

  private router = inject(Router);
  private characterService = inject(CharacterService)

  public constructor() { }

  public ngOnInit(): void {
    this.characterService.characters$
      .subscribe((characters) => {
        this.characters = characters;
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public selectCharacter(event: Event, characterSelected: Character) {
    event.preventDefault();
    const character = this.characters?.find(character => character === characterSelected);
    if (character) {
      this.currentCharacter = character;
      this.currentClass = character.class.className;
    } else this.currentClass = 'none';
  }

  public handleBackToHome() {
    this.router.navigate(['/']);
  }

  public deleteCharacter() {
    if (!this.currentCharacter) return;
    this.characters = this.characterService.deleteCharacter(this.currentCharacter);
    this.currentCharacter = null;
    this.currentClass = 'none';
  }

  public newCharacter() {
    this.router.navigate(['/character-creation']);
  }

  public startTheGame() {
    if (this.currentCharacter) this.router.navigate(['/game']);
  }
}
