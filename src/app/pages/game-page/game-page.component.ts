import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnDestroy } from '@angular/core';
import { ScrollIdentify, TomeIdentify } from '@model/item/consumables/scrolls_and_tomes';
import { Item } from '@model/item/item';
import { Axe, HandAxe } from '@model/item/weapons/axes';
import { rogue_encampment_id } from '@model/zones/act1/rogue_encampment';
import { Town } from '@model/zones/town';
import { CursorService } from '@services/cursor/cursor.service';
import { GameControllerService } from '@services/game-controller/game-controller.service';
import { InventoryService } from '@services/inventory/inventory.service';
import { ACT_ENUM } from '@shared/enum/act.enum';
import { InventoryComponent } from '@ui/game/player-hud/inventory/inventory.component';
import { GameHeaderComponent } from "../../ui/game/game-header/game-header.component";
import { PlayerHudComponent } from '../../ui/game/player-hud/player-hud.component';
import { TownComponent } from "../../ui/game/town/town/town.component";

@Component({
  selector: 'app-game-page',
  imports: [CommonModule, PlayerHudComponent, InventoryComponent, GameHeaderComponent, TownComponent],
  templateUrl: './game-page.component.html',
})
export class GamePageComponent implements OnDestroy {
  inventoryService = inject(InventoryService)
  cursorService = inject(CursorService)
  gameControllerService = inject(GameControllerService)
  gameContainerStyle = "flex flex-row h-full w-full bg-pink-100"

  isInventoryOpen = computed(() => {
    return this.inventoryService.isInventoryOpen()
  })

  // This is working as intended, however it is not compatible with bmp images
  cursorImage = computed<string>(() => {
    let cursor = "cursor: pointer;"
    if (this.cursorService.item() instanceof Item) {
      cursor = "cursor: url(" + this.cursorService.item()?.image + ") 16 16,pointer;"
    }
    return cursor
  })

  currentZoneName = computed<string>(() => {
    let zone = this.gameControllerService.current_zone()
    if (zone !== undefined) {
      return zone.name
    }
    return "error"
  })

  isTown = computed<boolean>(() => {
    if (this.gameControllerService.current_zone() instanceof Town) {
      return true
    }
    return false
  })

  constructor() {
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
    this.gameControllerService.changeZone(rogue_encampment_id, ACT_ENUM.ACT1)
  }

  ngOnDestroy(): void {
    this.inventoryService.clear()
  }
}
