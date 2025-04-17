import { Component, computed, input } from '@angular/core';
import { Inventory } from '../../../../../model/player/inventory';
import { CommonModule } from '@angular/common';
import { GameController } from '../../../../../model/game-controller';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  gameController = input.required<GameController>()
}
