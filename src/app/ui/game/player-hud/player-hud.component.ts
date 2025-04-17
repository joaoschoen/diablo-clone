import { Component, input } from '@angular/core';
import { GameController } from '../../../model/game-controller';

@Component({
  selector: 'app-player-hud',
  imports: [],
  templateUrl: './player-hud.component.html',
  styleUrl: './player-hud.component.css'
})
export class PlayerHudComponent {
  gameController = input.required<GameController>()
}
