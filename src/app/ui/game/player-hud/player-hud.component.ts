import { Component, inject } from '@angular/core';
import { CharacterService } from '@services/character/character.service';
import { InventoryService } from '@services/inventory/inventory.service';

@Component({
  selector: 'app-player-hud',
  imports: [],
  templateUrl: './player-hud.component.html',
})
export class PlayerHudComponent {
  inventoryService = inject(InventoryService)
  characterService = inject(CharacterService)
  handleToggleInventory() {
    this.inventoryService.toggleInventory()
  }
}
