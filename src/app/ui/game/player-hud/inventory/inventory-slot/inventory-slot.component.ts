import { Component, computed, input } from '@angular/core';
import { INV_SLOT_BG } from '@model/player/equipped_items';
import { InventorySlot } from '@model/player/inventory';

@Component({
  selector: 'app-inventory-slot',
  imports: [],
  templateUrl: './inventory-slot.component.html',
  styleUrl: './inventory-slot.component.css',
})
export class InventorySlotComponent {
  inventory_slot = input.required<InventorySlot>()
  slot_bg = INV_SLOT_BG

  style = computed(() => {
    let style = "background-image: url("
    style += INV_SLOT_BG.INV_SLOT
    style += "); background-repeat: no-repeat;"
    return style
  })
}
