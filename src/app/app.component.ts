import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character } from './model/player/player';
import { HeaderComponent } from './ui/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'diablo-clone';
  public characters: Character[] = [];
}
