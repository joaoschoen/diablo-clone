import { Injectable, signal } from '@angular/core';
import { CURSOR_ACTION_ENUM } from '@model/cursor';
import { Vector2D } from '@model/geometry';
import { Equipment, INV_SLOT_ENUM, Item } from '@model/item/item';
import { InventorySlot, ItemLocation } from '@model/player/inventory';
import { EquippedItemsService } from '@services/equipped-items/equipped-items.service';
import { InventoryService } from '../inventory/inventory.service';

@Injectable({
  providedIn: 'root'
})
export class CursorService {
  item = signal<Item | undefined>(undefined)
  action = signal<CURSOR_ACTION_ENUM>(CURSOR_ACTION_ENUM.EMPTY)

  public constructor(
    private inventoryService: InventoryService,
    private equippedItemsService: EquippedItemsService
  ) { }

  handleInventoryClick(event: MouseEvent, clickTarget: InventorySlot | ItemLocation) {
    // console.log("handleInventoryClick")
    event.preventDefault()
    event.stopPropagation()
    let item_id: string
    let location: Vector2D
    // console.log(clickTarget)
    // console.log(clickTarget instanceof InventorySlot)
    // console.log(clickTarget instanceof ItemLocation)
    if (clickTarget instanceof ItemLocation) {
      item_id = clickTarget.item.id
      location = clickTarget.location
    } else {
      item_id = clickTarget.item_id
      location = clickTarget.location
    }
    // Left click
    if (event.button === 0) {
      this.handleLeftClick(item_id, location)
    } else
      if (event.button === 2) {
        this.handleRightClick(item_id, location)
      }
  }

  handleEquipmentClick(event: MouseEvent, slot: INV_SLOT_ENUM[], item_id: string) {
    event.preventDefault()
    event.stopPropagation()
    console.log("handleEquipmentClick")
    // IF INVENTORY SLOT IS EMPTY
    if (item_id === "") {
      // IF CURSOR HAS ITEM
      if (this.item() !== undefined && this.item() instanceof Equipment) {
        this.equippedItemsService
        console.log(this.item()?.slots)
      }
    }
    // IF INVENTORY SLOT IS NOT EMPTY
    if (item_id !== "") {
      console.log("slot is empty")
    }
  }

  handleLeftClick(item_id: string, location: Vector2D) {
    // If clicked an item
    if (item_id !== "") {
      // console.log("clicked item")
      // If cursor is empty
      if (this.item() === undefined) {
        // Move item to cursor
        let item = this.inventoryService.removeItem(item_id)
        if (item !== undefined) {
          this.item.update(() => item)
          this.action.update(() => CURSOR_ACTION_ENUM.HOLD)
        }
      } else
      // If cursor is not empty
      {
        // If cursor holding item
        if (this.action() === CURSOR_ACTION_ENUM.HOLD) {
          // Try to swap item in inventory with cursor item


        }
      }
    } else
    // Inventory slot without item clicked
    {
      // console.log("clicked empty space")
      // If cursor holding item
      if (this.action() === CURSOR_ACTION_ENUM.HOLD) {
        // console.log("holding item")
        // Try to swap add item in inventory
        if (this.item() instanceof Item) {
          let insert = this.inventoryService.addItem(this.item() as Item, location)
          if (insert === true) {
            this.item.update(() => undefined)
            this.action.update(() => CURSOR_ACTION_ENUM.EMPTY)
          }
        }
      }
    }
    // */
  }

  handleRightClick(item_id: string, location: Vector2D) {


  }
}
