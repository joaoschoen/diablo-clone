import { Component, OnInit } from '@angular/core';
import { PlayerHudComponent } from '../../ui/game/player-hud/player-hud.component';
import { GameController } from '../../model/game-controller';
import { Attributes, Character } from '../../model/player/player';
import { Amazon } from '../../model/player/classes/amazon';
import { Quests } from '../../model/player/quests';
import { WaypointList } from '../../model/player/waypoint';
import { Inventory } from '../../model/player/inventory';
import { ACT_ENUM } from '../../model/areas/act';
import { DIFFICULTY_ENUM } from '../../model/player/difficulty';
import { InventoryComponent } from "../../ui/game/player-hud/inventory/inventory/inventory.component";

@Component({
  selector: 'app-game-page',
  imports: [PlayerHudComponent, InventoryComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})
export class GamePageComponent implements OnInit {
  gameController: GameController
  isInventoryOpen: boolean = true

  constructor(){
    let character = new Character(
      "Character Name",
      new Amazon(),
      new Attributes(),
      new Attributes(),
      undefined,
      new Quests(),
      new WaypointList(),
      new Inventory(10, 4),
    )
    let gameController = new GameController(
      character,
      ACT_ENUM.ACT1,
      DIFFICULTY_ENUM.NORMAL
    )
    this.gameController = gameController
  }

  ngOnInit(): void {
    
  }
}
