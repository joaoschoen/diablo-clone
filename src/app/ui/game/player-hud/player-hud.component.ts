import { Component, inject, input } from '@angular/core';
import { InventoryService } from '@services/inventory/inventory.service';
import { GameController } from '../../../model/game-controller';

@Component({
  selector: 'app-player-hud',
  imports: [],
  templateUrl: './player-hud.component.html',
  styleUrl: './player-hud.component.css'
})
export class PlayerHudComponent {
  inventoryService = inject(InventoryService)
  handleToggleInventory() {
    this.inventoryService.toggleInventory()
  }
  gameController = input.required<GameController>()
}
