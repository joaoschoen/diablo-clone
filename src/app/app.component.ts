import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from '@services/character/character.service';
import { Character } from './model/player/player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  public title = 'diablo-clone';
  public characters: Character[] | null = [];

  public constructor(private characterService: CharacterService) { }

  public ngOnInit(): void {
    this.characterService.characters$.subscribe((characters) => {
      this.characters = characters;
    });
  }
}
