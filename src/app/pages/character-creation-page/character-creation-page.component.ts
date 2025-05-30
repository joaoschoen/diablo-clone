import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { CharacterService } from '@services/character/character.service';
import { Subject, takeUntil } from 'rxjs';
import { v4 as uuid } from "uuid";
import { Amazon } from '../../model/player/classes/amazon';
import { Assassin } from '../../model/player/classes/assassin';
import { Barbarian } from '../../model/player/classes/barbarian';
import { Class } from '../../model/player/classes/class';
import { Druid } from '../../model/player/classes/druid';
import { Necromancer } from '../../model/player/classes/necromancer';
import { Paladin } from '../../model/player/classes/paladin';
import { Sorcerer } from '../../model/player/classes/sorcerer';
import { Attributes, Character } from '../../model/player/player';
import { WaypointList } from '../../model/player/waypoint';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-character-creation-page',
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule, MatFormFieldModule, RouterModule],
  templateUrl: './character-creation-page.component.html',
  styleUrl: './character-creation-page.component.css'
})
export class CharacterCreationPageComponent implements OnInit, OnDestroy {

  public characterClasses: Class[] = [new Amazon(), new Assassin(), new Barbarian(), new Druid(), new Necromancer(), new Paladin(), new Sorcerer()];
  public currentClass: string = 'none';
  public form: FormGroup;
  public destroy$ = new Subject<boolean>();

  private router = inject(Router);
  private characterService = inject(CharacterService)

  public constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      characterClass: [null, [Validators.required]],
      characterName: ['', [Validators.required, Validators.maxLength(12)]]
    })
  }

  public ngOnInit(): void {
    this.handleChanges();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public formField(fieldName: string): AbstractControl | null {
    return this.form.get(fieldName);
  }

  public handleChanges() {
    this.formField("characterClass")?.valueChanges
      .pipe(takeUntil(this.destroy$)).subscribe({ next: (value) => this.formField("characterClass")?.patchValue(value, { emitEvent: false }) })
  }

  public selectClass(characterClassName: string) {
    const selectedClass = this.characterClasses.find(characterClass => characterClass.constructor.name === characterClassName);
    if (selectedClass) {
      this.formField("characterClass")?.patchValue(selectedClass, { emitEvent: false });
      this.currentClass = this.formField('characterClass')?.value?.className;
    } else this.currentClass = 'none';
  }

  public handleBackToHome() {
    this.router.navigate(['/character-selection']);
  }

  public onSubmit() {
    if (this.form.valid) {
      const selectedClass: Class = this.form.value.characterClass;
      const characterName: string = this.form.value.characterName;

      const character: Character = new Character(
        uuid(),
        characterName,
        selectedClass,
        selectedClass.startingAttributes,
        new Attributes(),
        undefined,
        new WaypointList(),
      )

      this.characterService.addCharacter(character);

      this.router.navigate(['/character-selection']);
    }
  }

}
