import { Injectable, signal } from '@angular/core';
import { Vector2D } from '@model/geometry';
import { Item } from '@model/item/item';
import { Inventory, PLAYER_INVENTORY_DIMENSIONS } from '@model/player/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory = signal<Inventory>(new Inventory(PLAYER_INVENTORY_DIMENSIONS, []))
  isInventoryOpen = signal<boolean>(true)
  constructor() { }

  toggleInventory() {
    if (this.isInventoryOpen()) {
      this.isInventoryOpen.set(false)
    } else {
      this.isInventoryOpen.set(true)
    }
  }

  isTargetAvailable(location: Vector2D, size: Vector2D, ignore_id?: string): boolean {
    return this.inventory().isTargetAvailable(location, size, ignore_id)
  }

  addItem(item: Item, location: Vector2D): boolean {
    console.log("addItem")

    let available = this.inventory().isTargetAvailable(location, item.size)
    if (available) {
      let new_inventory = new Inventory(this.inventory().size, this.inventory().item_list)
      let insert = new_inventory.addItem(item, location)
      if (insert) {
        this.inventory.update(() => new_inventory)
        return true
      }
      console.log("something went wrong")
      return false
    }
    return false
  }

  removeItem(item_id: string): Item | undefined {
    let new_inventory = new Inventory(this.inventory().size, this.inventory().item_list)
    let removed_item = new_inventory.removeItem(item_id)
    if (removed_item != undefined) {
      this.inventory.update(() => new_inventory)
    }
    return removed_item
  }

  getItemImage(item_id: string) {
    for (let item_location of this.inventory().item_list) {
      if (item_location.item.id === item_id) {
        return item_location.item.image
      }
    }
    return ""
  }

}
