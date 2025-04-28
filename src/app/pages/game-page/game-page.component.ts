import { CommonModule } from '@angular/common';
import { Component, computed, inject, Signal, signal } from '@angular/core';
import { GameController } from '@model/game-controller';
import { ScrollIdentify, TomeIdentify } from '@model/item/consumables/scrolls_and_tomes';
import { Item } from '@model/item/item';
import { Axe, HandAxe } from '@model/item/weapons/axes';
import { Amazon } from '@model/player/classes/amazon';
import { DIFFICULTY_ENUM } from '@model/player/difficulty';
import { Attributes, Character } from '@model/player/player';
import { Quests } from '@model/player/quests';
import { WaypointList } from '@model/player/waypoint';
import { CursorService } from '@services/cursor/cursor.service';
import { InventoryService } from '@services/inventory/inventory.service';
import { ACT_ENUM } from '@shared/enum/act.enum';
import { InventoryComponent } from '@ui/game/player-hud/inventory/inventory.component';
import { v4 as uuid } from "uuid";
import { PlayerHudComponent } from '../../ui/game/player-hud/player-hud.component';

@Component({
  selector: 'app-game-page',
  imports: [CommonModule, PlayerHudComponent, InventoryComponent],
  templateUrl: './game-page.component.html',
})
export class GamePageComponent {
  inventoryService = inject(InventoryService)
  cursorService = inject(CursorService)
  gameController!: Signal<GameController>
  gameContainerStyle = "flex flex-row h-full w-full bg-pink-100"

  isInventoryOpen = computed(() => {
    return this.inventoryService.isInventoryOpen()
  })

  // This is working as intended, however
  cursorImage = computed<string>(() => {
    let cursor = "cursor: pointer;"
    if (this.cursorService.item() instanceof Item) {
      cursor = "cursor: url(" + this.cursorService.item()?.image + ") 16 16,pointer;"
    }
    return cursor
  })

  constructor() {
    let character = new Character(
      uuid(),
      "Character Name",
      new Amazon(),
      new Attributes(),
      new Attributes(),
      undefined,
      new Quests(),
      new WaypointList(),
    )
    let scroll = new ScrollIdentify()
    let scroll2 = new ScrollIdentify()
    let tome = new TomeIdentify(20)
    let new_axe = new HandAxe()
    let new_axe2 = new Axe()
    this.inventoryService.pickUpItem(scroll)
    this.inventoryService.pickUpItem(scroll2)
    this.inventoryService.pickUpItem(tome)
    this.inventoryService.pickUpItem(new_axe)
    this.inventoryService.pickUpItem(new_axe2)
    let gameController = new GameController(
      character,
      ACT_ENUM.ACT1,
      DIFFICULTY_ENUM.NORMAL
    )
    this.gameController = signal(gameController)
  }
}
