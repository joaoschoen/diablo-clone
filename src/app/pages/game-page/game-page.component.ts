import { Component } from '@angular/core';
import { PlayerHudComponent } from '../../ui/game/player-hud/player-hud.component';

@Component({
  selector: 'app-game-page',
  imports: [PlayerHudComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})
export class GamePageComponent {

}
