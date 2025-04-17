import { Component, computed, OnInit } from '@angular/core';
import { PlayerHudComponent } from '../../ui/game/player-hud/player-hud.component';
import { GameController } from '../../model/game-controller';
import { Attributes, Character } from '../../model/player/player';
import { Amazon } from '../../model/player/classes/amazon';
import { Quests } from '../../model/player/quests';
import { WaypointList } from '../../model/player/waypoint';
import { Inventory, ItemLocation } from '../../model/player/inventory';
import { ACT_ENUM } from '../../model/areas/act';
import { DIFFICULTY_ENUM } from '../../model/player/difficulty';
import { InventoryComponent } from "../../ui/game/player-hud/inventory/inventory/inventory.component";
import { ScrollIdentify } from '../../model/item/consumables/scrolls_and_tomes';
import { Vector2D } from '../../model/geometry';

@Component({
  selector: 'app-game-page',
  imports: [PlayerHudComponent, InventoryComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})
export class GamePageComponent implements OnInit {
  gameController: GameController
  isInventoryOpen: boolean = true
  gameContainerStyle = "flex flex-row h-full w-full bg-pink-100"
  cursor = computed<boolean>(()=>{
    if(this.gameController.cursor === undefined){
      return false
    } else{
      
    }
  })

  constructor(){
    let character = new Character(
      "Character Name",
      new Amazon(),
      new Attributes(),
      new Attributes(),
      undefined,
      new Quests(),
      new WaypointList(),
      new Inventory(10, 4,[]),
    )
    let scroll = new ScrollIdentify()
    character.inventory.addItem(scroll,new Vector2D(0,0))
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
