import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { NPC } from '@model/npcs/npc';
import { CursorService } from '@services/cursor/cursor.service';
import { GameControllerService } from '@services/game-controller/game-controller.service';
import { InventoryService } from '@services/inventory/inventory.service';
import { ButtonComponent } from "../../../button/button.component";

@Component({
  selector: 'app-town',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './town.component.html',
})
export class TownComponent {
  inventoryService = inject(InventoryService)
  cursorService = inject(CursorService)
  gameControllerService = inject(GameControllerService)

  npcs = computed(() => {
    let npcs = this.gameControllerService.current_zone()?.npcs
    if (npcs !== undefined) {
      return npcs
    }
    return [] as NPC[]
  })
}

