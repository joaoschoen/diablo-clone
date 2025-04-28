import { CommonModule } from '@angular/common';
import { Component, computed, inject, Signal, signal } from '@angular/core';
import { GameController } from '@model/game-controller';
import { Vector2D } from '@model/geometry';
import { ScrollIdentify, TomeIdentify } from '@model/item/consumables/scrolls_and_tomes';
import { Item } from '@model/item/item';
import { Amazon } from '@model/player/classes/amazon';
import { DIFFICULTY_ENUM } from '@model/player/difficulty';
import { Attributes, Character } from '@model/player/player';
import { Quests } from '@model/player/quests';
import { WaypointList } from '@model/player/waypoint';
import { CursorService } from '@services/cursor/cursor.service';
import { EquippedItemsService } from '@services/equipped-items/equipped-items.service';
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
  equippedItemsService = inject(EquippedItemsService)
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
    let tome = new TomeIdentify(20)

    this.inventoryService.addItem(scroll, new Vector2D(0, 0))
    this.inventoryService.addItem(tome, new Vector2D(1, 0))
    let gameController = new GameController(
      character,
      ACT_ENUM.ACT1,
      DIFFICULTY_ENUM.NORMAL
    )
    this.gameController = signal(gameController)
  }
}
