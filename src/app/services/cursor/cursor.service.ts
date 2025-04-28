import { Injectable, signal } from '@angular/core';
import { CURSOR_ACTION_ENUM } from '@model/cursor';
import { Vector2D } from '@model/geometry';
import { Equipment } from '@model/item/equipment';
import { Item } from '@model/item/item';
import { Weapon } from '@model/item/weapon';
import { InventorySlot, ItemLocation } from '@model/player/inventory';
import { AttributeService } from '@services/attribute/attribute.service';
import { CharacterService } from '@services/character/character.service';
import { INV_SLOT_ENUM } from 'src/app/shared/types/slot.type';
import { InventoryService, SwapResult, WEAPON_SLOTS } from '../inventory/inventory.service';

@Injectable({
  providedIn: 'root'
})
export class CursorService {
  item = signal<Item | undefined>(undefined)
  action = signal<CURSOR_ACTION_ENUM>(CURSOR_ACTION_ENUM.EMPTY)

  public constructor(
    private inventoryService: InventoryService,
    private attributeService: AttributeService,
    private characterService: CharacterService,
  ) { }

  public emptyCursor() {
    this.item.set(undefined)
    this.action.set(CURSOR_ACTION_ENUM.EMPTY)
  }

  public holdItem(item: Item) {
    this.item.set(item)
    this.action.set(CURSOR_ACTION_ENUM.HOLD)
  }

  public handleInventoryClick(event: MouseEvent, clickTarget: InventorySlot | ItemLocation) {
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

  public handleEquipmentSlotClick(slot: INV_SLOT_ENUM) {
    // console.log("handleEquipmentSlotClick")
    // console.log(slot)
    // console.log(this.item())
    // CURSOR EMPTY
    if (this.item() === undefined) {
      let item_in_slot = this.inventoryService.takeFromSlot(slot)
      if (item_in_slot !== undefined) {
        this.holdItem(item_in_slot)
      } else {
        this.emptyCursor()
      }
      return
    }
    let item = this.item() as Item
    // IS EQUIPMENT
    if (!(this.item() instanceof Equipment)) {
      // console.log("held item is not an equipment")
      return
    }
    // ATTRIBUTE REQUIREMENTS
    if (!this.attributeService.canEquip(item as Equipment)) {
      return
    }
    // CLASS ITEM TYPE REQUIREMENTS
    if (!this.characterService.canEquip(item as Equipment)) {
      return
    }
    let swapResult: SwapResult
    // WEAPON
    // console.log("it's a weapon")
    if (WEAPON_SLOTS.includes(slot) && (item instanceof Weapon)) {
      let dualWield = this.characterService.canDualWield(item as Weapon)
      swapResult = this.inventoryService.swapWeapon(item as Weapon, slot, dualWield)
    } else
    // NOT A WEAPON
    {
      swapResult = this.inventoryService.swapEquipment(item as Equipment, slot)
    }
    if (swapResult.hasSwapped) {
      // console.log(swapResult)
      this.attributeService.calcFinalAttributes()
      if (swapResult.item === undefined) {
        this.emptyCursor()
      } else {
        this.holdItem(swapResult.item)
      }
    }
  }

  private handleLeftClick(item_id: string, location: Vector2D) {
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

  private handleRightClick(item_id: string, location: Vector2D) {


  }
}
