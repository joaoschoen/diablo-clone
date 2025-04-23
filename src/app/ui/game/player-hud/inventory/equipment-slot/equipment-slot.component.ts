import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { INV_SLOT_ENUM } from '@model/item/item';
import { INV_SLOT_BG } from '@model/player/equipped_items';
import { CursorService } from '@services/cursor/cursor.service';
import { EquippedItemsService } from '@services/equipped-items/equipped-items.service';

@Component({
  selector: 'app-equipment-slot',
  imports: [CommonModule],
  templateUrl: './equipment-slot.component.html',
  styleUrl: './equipment-slot.component.css'
})
export class EquipmentSlotComponent {
  equippedItemsService = inject(EquippedItemsService)
  cursorService = inject(CursorService)
  slot = input.required<INV_SLOT_ENUM[]>()
  item_id = input<string>("")
  selected = input<boolean>()

  handleSwapHand() {
    this.equippedItemsService.swapHand()
  }

  handleEquipmentSlotClick(event: MouseEvent) {
    this.cursorService.handleEquipmentClick(event, this.slot(), this.item_id())
  }

  isWeaponSlot = computed(() => {
    if (this.slot()[0] === INV_SLOT_ENUM.WEAPON) {
      return true
    }
    return false
  })

  bg_image = computed(() => {
    let style = "background-image: url("
    switch (this.slot()[0]) {
      case INV_SLOT_ENUM.WEAPON:
        style += INV_SLOT_BG.WEAPON
        style += "); background-repeat: no-repeat;"
        style += "background-color: black;"
        style += "width: 64px;"
        style += "height: 128px;"
        break
      case INV_SLOT_ENUM.GLOVES:
        style += INV_SLOT_BG.GLOVES
        style += "); background-repeat: no-repeat;"
        style += "background-color: black;"
        style += "width: 64px;"
        style += "height: 64px;"
        break
      case INV_SLOT_ENUM.RING:
        style += INV_SLOT_BG.RING
        style += "); background-repeat: no-repeat;"
        style += "background-color: black;"
        style += "width: 32px;"
        style += "height: 32px;"
        break
      case INV_SLOT_ENUM.HELMET:
        style += INV_SLOT_BG.HELMET
        style += "); background-repeat: no-repeat;"
        style += "background-color: black;"
        style += "width: 64px;"
        style += "height: 64px;"
        break
      case INV_SLOT_ENUM.ARMOR:
        style += INV_SLOT_BG.ARMOR
        style += "); background-repeat: no-repeat;"
        style += "background-color: black;"
        style += "width: 64px;"
        style += "height: 96px;"
        break
      case INV_SLOT_ENUM.BELT:
        style += INV_SLOT_BG.BELT
        style += "); background-repeat: no-repeat;"
        style += "background-color: black;"
        style += "width: 64px;"
        style += "height: 32px;"
        break
      case INV_SLOT_ENUM.AMULET:
        style += INV_SLOT_BG.AMULET
        style += "); background-repeat: no-repeat;"
        style += "background-color: black;"
        style += "width: 32px;"
        style += "height: 32px;"
        break
      case INV_SLOT_ENUM.BOOTS:
        style += INV_SLOT_BG.BOOTS
        style += "); background-repeat: no-repeat;"
        style += "background-color: black;"
        style += "width: 64px;"
        style += "height: 64px;"
        break
      default:
        style += ""
        style += "); background-repeat: no-repeat;"
        style += "background-color: black;"
        style += "width: 32px;"
        style += "height: 32px;"
        break
    }
    return style
  })

  hand_style = "border-amber-500 border-2 border-b-0 w-[33px] h-[22px] text-center"

  hand_one_bg = computed(() => {
    if (
      this.slot()[2] === INV_SLOT_ENUM.HAND_ONE_LEFT ||
      this.slot()[2] === INV_SLOT_ENUM.HAND_ONE_RIGHT
    ) {
      return "bg-stone-400 "
    } else {
      return "bg-stone-600 "
    }
  })

  hand_two_bg = computed(() => {
    if (
      this.slot()[2] === INV_SLOT_ENUM.HAND_TWO_LEFT ||
      this.slot()[2] === INV_SLOT_ENUM.HAND_TWO_RIGHT
    ) {
      return "bg-stone-400 "
    } else {
      return "bg-stone-600 "
    }
  })

  hidden = computed(() => {
    let class_style = ""
    if (!this.isWeaponSlot()) {
      return class_style
    }
    if (!this.selected()) {
      return class_style += " hidden"
    } else {
      return class_style
    }
  })
}
