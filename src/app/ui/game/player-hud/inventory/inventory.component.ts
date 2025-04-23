import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { INV_SLOT_ENUM } from '@model/item/item';
import { CursorService } from '@services/cursor/cursor.service';
import { EquippedItemsService, SELECTED_HAND } from '@services/equipped-items/equipped-items.service';
import { InventoryService } from '@services/inventory/inventory.service';
import { EquipmentSlotComponent } from "./equipment-slot/equipment-slot.component";
import { InventoryItemComponent } from "./inventory-item/inventory-item.component";
import { InventorySlotComponent } from './inventory-slot/inventory-slot.component';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, InventoryItemComponent, InventorySlotComponent, EquipmentSlotComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  inventoryService = inject(InventoryService)
  equippedItemsService = inject(EquippedItemsService)
  cursorService = inject(CursorService)

  handleClose() {
    this.inventoryService.toggleInventory()
  }

  hand_one = computed(() => {
    if (this.equippedItemsService.selectedHand() === SELECTED_HAND.HAND_ONE) {
      return true
    }
    return false
  })

  hand_two = computed(() => {
    if (this.equippedItemsService.selectedHand() === SELECTED_HAND.HAND_TWO) {
      return true
    }
    return false
  })

  slot_type = INV_SLOT_ENUM
}
