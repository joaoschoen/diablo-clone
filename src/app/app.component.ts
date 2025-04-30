import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character } from './model/player/player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  public title = 'diablo-clone';
  public characters: Character[] | null = [];

  public constructor() { }

}
