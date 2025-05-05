import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, Signal } from '@angular/core';
import { Item } from '@model/item/item';
import { CursorService } from '@services/cursor/cursor.service';
import { InventoryService } from '@services/inventory/inventory.service';
import { INV_SLOT_BG } from '@shared/enum/image-url.enum';
import { INV_SLOT_ENUM } from 'src/app/shared/types/slot.type';

@Component({
  selector: 'app-equipment-slot',
  imports: [CommonModule],
  templateUrl: './equipment-slot.component.html',
})
export class EquipmentSlotComponent {
  inventoryService = inject(InventoryService)
  cursorService = inject(CursorService)
  slot = input.required<INV_SLOT_ENUM>()
  hand = input<INV_SLOT_ENUM>()
  selected = input<boolean>()
  item = input.required<Signal<Item | undefined>>()

  handleSwapHand() {
    this.inventoryService.swapActiveHand()
  }

  handleEquipmentSlotClick(event: MouseEvent) {
    event.preventDefault()
    event.stopPropagation()
    if (this.hand() !== undefined) {
      let hand = this.hand() as INV_SLOT_ENUM
      this.cursorService.handleEquipmentSlotClick(hand)
    } else {
      this.cursorService.handleEquipmentSlotClick(this.slot())
    }
  }

  isWeaponSlot = computed(() => {
    if (this.hand() !== undefined) {
      return true
    }
    return false
  })

  bg_image = computed(() => {
    let style = "background-image: url("
    switch (this.slot()) {
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
      this.hand() === INV_SLOT_ENUM.HAND_ONE_LEFT ||
      this.hand() === INV_SLOT_ENUM.HAND_ONE_RIGHT
    ) {
      return "bg-stone-400 "
    } else {
      return "bg-stone-600 "
    }
  })

  hand_two_bg = computed(() => {
    if (
      this.hand() === INV_SLOT_ENUM.HAND_TWO_LEFT ||
      this.hand() === INV_SLOT_ENUM.HAND_TWO_RIGHT
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

  // has_item = computed(() => {
  //   console.log("computing")
  //   let items: ItemLocation[] = []
  //   let item = this.inventoryService.getItemInSlot(this.slot())
  //   switch (this.slot()) {
  //     case INV_SLOT_ENUM.AMULET:
  //       item = this.inventoryService.amulet() as Item
  //       break
  //     case INV_SLOT_ENUM.ARMOR:
  //       item = this.inventoryService.body_armor() as Item
  //       break
  //     case INV_SLOT_ENUM.BELT:
  //       item = this.inventoryService.belt() as Item
  //       break
  //     case INV_SLOT_ENUM.BOOTS:
  //       item = this.inventoryService.boots() as Item
  //       break
  //     case INV_SLOT_ENUM.GLOVES:
  //       item = this.inventoryService.gloves() as Item
  //       break
  //     case INV_SLOT_ENUM.HAND_ONE_LEFT:
  //       item = this.inventoryService.hand_one_left() as Item
  //       break
  //     case INV_SLOT_ENUM.HAND_ONE_RIGHT:
  //       item = this.inventoryService.hand_one_right() as Item
  //       break
  //     case INV_SLOT_ENUM.HAND_TWO_LEFT:
  //       item = this.inventoryService.hand_two_left() as Item
  //       break
  //     case INV_SLOT_ENUM.HAND_TWO_RIGHT:
  //       item = this.inventoryService.hand_two_right() as Item
  //       break
  //     case INV_SLOT_ENUM.HELMET:
  //       item = this.inventoryService.helmet() as Item
  //       break
  //     case INV_SLOT_ENUM.RING_LEFT:
  //       item = this.inventoryService.ring_left() as Item
  //       break
  //     case INV_SLOT_ENUM.RING_RIGHT:
  //       item = this.inventoryService.ring_right() as Item
  //       break
  //   }
  //   if (item !== undefined) {
  //     let item_location = new ItemLocation(item as Item, new Vector2D(0, 0))
  //     items.push(item_location)
  //   }
  //   return items
  // })

  class = computed(() => {
    return this.inventoryService.getItemInSlot(this.slot())
  })

  image_style = computed<string>(() => {
    let item
    let width = 1
    let height = 1
    if (this.item()() !== undefined) {
      item = this.item()() as Item
      let size = item.size
      width = 32 * size.x
      height = 32 * size.y
    }

    return `width:${width}px; height:${height}px;`
  })
}
