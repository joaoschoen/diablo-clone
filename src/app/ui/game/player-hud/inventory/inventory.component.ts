import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { CursorService } from '@services/cursor/cursor.service';
import { InventoryService, SELECTED_HAND } from '@services/inventory/inventory.service';
import { INV_SLOT_ENUM } from 'src/app/shared/types/slot.type';
import { EquipmentSlotComponent } from "./equipment-slot/equipment-slot.component";
import { InventoryItemComponent } from "./inventory-item/inventory-item.component";
import { InventorySlotComponent } from './inventory-slot/inventory-slot.component';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, InventoryItemComponent, InventorySlotComponent, EquipmentSlotComponent],
  templateUrl: './inventory.component.html',
})
export class InventoryComponent {
  inventoryService = inject(InventoryService)
  cursorService = inject(CursorService)

  handleClose() {
    this.inventoryService.toggleInventory()
  }

  hand_one = computed(() => {
    if (this.inventoryService.selectedHand() === SELECTED_HAND.HAND_ONE) {
      return true
    }
    return false
  })

  hand_two = computed(() => {
    if (this.inventoryService.selectedHand() === SELECTED_HAND.HAND_TWO) {
      return true
    }
    return false
  })

  slot_type = INV_SLOT_ENUM
}
