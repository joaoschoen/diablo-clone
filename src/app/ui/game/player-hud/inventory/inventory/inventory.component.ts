import { Component, input } from '@angular/core';
import { Inventory } from '../../../../../model/player/inventory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  inventory = input.required<Inventory>()
}
