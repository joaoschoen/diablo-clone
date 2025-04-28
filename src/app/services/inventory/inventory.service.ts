import { Injectable, signal } from '@angular/core';
import { Vector2D } from '@model/geometry';
import { Amulet } from '@model/item/armor/amulet';
import { Belt } from '@model/item/armor/belt';
import { BodyArmor } from '@model/item/armor/body_armor';
import { Boots } from '@model/item/armor/boots';
import { Gloves } from '@model/item/armor/gloves';
import { Helmet } from '@model/item/armor/helmet';
import { Ring } from '@model/item/armor/ring';
import { Equipment } from '@model/item/equipment';
import { ERROR_ITEM, Item } from '@model/item/item';
import { Weapon } from '@model/item/weapon';
import { Inventory, PLAYER_INVENTORY_DIMENSIONS } from '@model/player/inventory';
import { Attributes } from '@model/player/player';
import { WEAPON_WIELDING_ENUM } from '@shared/enum/weapon.enum';
import { INV_SLOT_ENUM } from '@shared/types/slot.type';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  public inventory = signal<Inventory>(new Inventory(PLAYER_INVENTORY_DIMENSIONS, []))
  public isInventoryOpen = signal<boolean>(true)
  public hand_one_left = signal<Weapon | undefined>(undefined)
  public hand_two_left = signal<Weapon | undefined>(undefined)
  public gloves = signal<Gloves | undefined>(undefined)
  public ring_left = signal<Ring | undefined>(undefined)
  public helmet = signal<Helmet | undefined>(undefined)
  public body_armor = signal<BodyArmor | undefined>(undefined)
  public belt = signal<Belt | undefined>(undefined)
  public amulet = signal<Amulet | undefined>(undefined)
  public ring_right = signal<Ring | undefined>(undefined)
  public hand_one_right = signal<Weapon | undefined>(undefined)
  public hand_two_right = signal<Weapon | undefined>(undefined)
  public boots = signal<Boots | undefined>(undefined)
  public selectedHand = signal<SELECTED_HAND>(SELECTED_HAND.HAND_ONE)

  constructor() { }

  // INVENTORY MANIPULATION

  public toggleInventory() {
    if (this.isInventoryOpen()) {
      this.isInventoryOpen.set(false)
    } else {
      this.isInventoryOpen.set(true)
    }
  }

  /** 
   * RECEIVES THE SIZE OF AN ITEM
   * IF CAN BE INSERTED
   *  RETURN LOCATION
   * ELSE
   *  RETURN -1,-1
   * 
   * 
   * @param size 
   * @returns 
   */
  public canPickUp(size: Vector2D) {
    // TODO MODIFY TO RETURN STACKABLE LOCATION IF FOUND
    for (let y = 0; y < this.inventory().inventory_rows.length; y++) {
      for (let x = 0; x < this.inventory().inventory_rows[y].inventory_cols.length; x++) {
        let location = new Vector2D(x, y)
        if (this.isTargetAvailable(location, size)) {
          return location
        }
      }
    }
    return new Vector2D(-1, -1)
  }

  public pickUpItem(item: Item): boolean {
    let location = this.canPickUp(item.size)
    if (location.x !== -1) {
      this.addItem(item, location)
      return true
    }
    return false
  }

  isTargetAvailable(location: Vector2D, size: Vector2D, ignore_id?: string): boolean {
    return this.inventory().isTargetAvailable(location, size, ignore_id)
  }

  addItem(item: Item, location: Vector2D): boolean {
    // TODO MODIFY TO RETURN STACKABLE LOCATION IF FOUND
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

  getItemImageById(item_id: string) {
    for (let item_location of this.inventory().item_list) {
      if (item_location.item.id === item_id) {
        return item_location.item.image
      }
    }
    return ""
  }

  getItemImageByEquipmentSlot(slot: INV_SLOT_ENUM) {
    let item = this.getItemInSlot(slot)
    if (item === undefined) {
      return ""
    } else {
      return item.image
    }
  }
  // EQUIPMENT MANIPULATION

  // RETURNS TRUE IF 
  public swapEquipment(item: Equipment, slot: INV_SLOT_ENUM): SwapResult {
    let swapResult = new SwapResult(undefined, false)
    let takenItem = this.takeFromSlot(slot)
    if (takenItem !== undefined) {
      swapResult.item = takenItem
      swapResult.hasSwapped = true
      this.putInSlot(item, slot)
    }
    return swapResult
  }

  public swapWeapon(new_weapon: Weapon, hand: INV_SLOT_ENUM, canDualWield: boolean): SwapResult {
    let swapResult = new SwapResult(undefined, false)
    // SETTING UP HAND WHICH HAND IS BEING SWAPPED
    let current_hand_slot = hand
    let opposite_hand_slot
    switch (hand) {
      case INV_SLOT_ENUM.HAND_ONE_LEFT:
        opposite_hand_slot = INV_SLOT_ENUM.HAND_ONE_RIGHT
        break;
      case INV_SLOT_ENUM.HAND_ONE_RIGHT:
        opposite_hand_slot = INV_SLOT_ENUM.HAND_ONE_LEFT
        break;
      case INV_SLOT_ENUM.HAND_TWO_LEFT:
        opposite_hand_slot = INV_SLOT_ENUM.HAND_TWO_RIGHT
        break;
      case INV_SLOT_ENUM.HAND_TWO_RIGHT:
        opposite_hand_slot = INV_SLOT_ENUM.HAND_TWO_LEFT
        break;
      default:
        return swapResult
    }
    let current_hand_item = this.getItemInHand(current_hand_slot)
    let opposite_hand_item = this.getItemInHand(opposite_hand_slot)
    // FALLBACK CHECK FOR ERROR
    if (
      current_hand_item?.name === "error" ||
      opposite_hand_item?.name === "error"
    ) {
      return swapResult
    }
    if (current_hand_item !== undefined) {
      current_hand_item = current_hand_item as Weapon
    }
    if (opposite_hand_item !== undefined) {
      opposite_hand_item = opposite_hand_item as Weapon
    }

    //CURRENT EMPTY | OPPOSITE EMPTY
    if (current_hand_item === undefined && opposite_hand_item === undefined) {
      this.putInSlot(new_weapon, current_hand_slot)
      swapResult.hasSwapped = true
      return swapResult
    }

    //CURRENT NOT EMPTY | OPPOSITE EMPTY
    if (current_hand_item !== undefined && opposite_hand_item === undefined) {
      let old_weapon = this.takeFromSlot(current_hand_slot)
      this.putInSlot(new_weapon, current_hand_slot)
      swapResult.item = old_weapon
      swapResult.hasSwapped = true
      return swapResult
    }

    //CURRENT EMPTY | OPPOSITE NOT EMPTY
    if (current_hand_item === undefined && opposite_hand_item !== undefined) {
      // WIELDING
      // EQUAL
      if (
        new_weapon.wielding === opposite_hand_item.wielding
      ) {
        // BOTH OFFHANDS
        if (new_weapon.wielding === WEAPON_WIELDING_ENUM.OFFHAND) {
          let old_weapon = this.takeFromSlot(opposite_hand_slot)
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.item = old_weapon
          swapResult.hasSwapped = true
          return swapResult
        }
        // CAN DUAL WIELD
        if (canDualWield) {
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.hasSwapped = true
          return swapResult
        } else
        // CAN'T DUAL WIELD
        {
          let old_weapon = this.takeFromSlot(opposite_hand_slot)
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.item = old_weapon
          swapResult.hasSwapped = true
          return swapResult
        }
      }
      // DIFFERENT
      if (
        new_weapon.wielding !== opposite_hand_item.wielding
      ) {
        // NEW 1H | OPPOSITE OFF HAND
        if (
          new_weapon.wielding === WEAPON_WIELDING_ENUM.ONE_HANDED &&
          opposite_hand_item.wielding === WEAPON_WIELDING_ENUM.OFFHAND
        ) {
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.hasSwapped = true
          return swapResult
        }
        // NEW 2H | OPPOSITE OFF HAND
        if (opposite_hand_item.wielding === WEAPON_WIELDING_ENUM.OFFHAND) {
          let old_weapon = this.takeFromSlot(opposite_hand_slot)
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.item = old_weapon
          swapResult.hasSwapped = true
          return swapResult
        }
      }
    }

    //CURRENT NOT EMPTY | OPPOSITE NOT EMPTY
    if (current_hand_item !== undefined && opposite_hand_item !== undefined) {
      // SAME WIELDING
      if (
        new_weapon.wielding === current_hand_item.wielding
      ) {
        // BOTH OFFHANDS OR BOTH 1H
        if (
          new_weapon.wielding === WEAPON_WIELDING_ENUM.ONE_HANDED ||
          new_weapon.wielding === WEAPON_WIELDING_ENUM.OFFHAND
        ) {
          let old_weapon = this.takeFromSlot(current_hand_slot)
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.item = old_weapon
          swapResult.hasSwapped = true
          return swapResult
        }
        // BOTH 2H CAN DUAL WIELD (BARBARIAN SPECIAL CASE)
        if (
          canDualWield &&
          new_weapon.wielding === WEAPON_WIELDING_ENUM.TWO_HANDED
        ) {
          let old_weapon = this.takeFromSlot(current_hand_slot)
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.item = old_weapon
          swapResult.hasSwapped = true
          return swapResult
        }
        // BOTH 2H CAN'T DUAL WIELD
        // IF CAN REMOVE OPPOSITE TO INVENTORY
        // DO SO THEN SWAP CURRENT HAND WITH CURSOR
        let location = this.canPickUp(opposite_hand_item.size)
        if (location.x === -1) {
          return swapResult
        } else {
          let old_opposite_hand_item = this.takeFromSlot(opposite_hand_slot)
          this.addItem(old_opposite_hand_item as Item, location)
          let old_weapon = this.takeFromSlot(current_hand_slot)
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.item = old_weapon
          swapResult.hasSwapped = true
          return swapResult
        }
      }
      // NEW 2H | CURRENT OLD 1H OR OFFHAND
      if (
        new_weapon.wielding === WEAPON_WIELDING_ENUM.TWO_HANDED &&
        (
          current_hand_item.wielding === WEAPON_WIELDING_ENUM.ONE_HANDED ||
          current_hand_item.wielding === WEAPON_WIELDING_ENUM.OFFHAND
        )
      ) {
        // SPECIAL CASE: BARBARIAN CAN WIELD 2H SWORD AS 1H
        if (canDualWield) {
          let old_weapon = this.takeFromSlot(current_hand_slot)
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.item = old_weapon
          swapResult.hasSwapped = true
          return swapResult
        }
        // IF CAN REMOVE OPPOSITE TO INVENTORY
        // DO SO THEN SWAP CURRENT HAND WITH CURSOR
        let location = this.canPickUp(opposite_hand_item.size)
        if (location.x === -1) {
          return swapResult
        } else {
          let old_opposite_hand_item = this.takeFromSlot(opposite_hand_slot)
          this.addItem(old_opposite_hand_item as Item, location)
          let old_weapon = this.takeFromSlot(current_hand_slot)
          this.putInSlot(new_weapon, current_hand_slot)
          swapResult.item = old_weapon
          swapResult.hasSwapped = true
          return swapResult
        }

      }
      return swapResult
    }
    return swapResult
  }

  public getItemInHand(slot: INV_SLOT_ENUM): Weapon | undefined {
    switch (slot) {
      case INV_SLOT_ENUM.HAND_ONE_LEFT:
        return this.hand_one_left()
      case INV_SLOT_ENUM.HAND_ONE_RIGHT:
        return this.hand_one_right()
      case INV_SLOT_ENUM.HAND_TWO_LEFT:
        return this.hand_two_left()
      case INV_SLOT_ENUM.HAND_TWO_RIGHT:
        return this.hand_two_right()
      default:
        return ERROR_ITEM as Weapon
    }
  }

  /**
   * CAUTION: 
   * calling this function assumes that the item is being set
   * in the correct slot
   * @param slot 
   * @param item 
   */
  public getItemInSlot(slot: INV_SLOT_ENUM) {
    switch (slot) {
      case INV_SLOT_ENUM.AMULET:
        return this.amulet()
      case INV_SLOT_ENUM.ARMOR:
        return this.body_armor()
      case INV_SLOT_ENUM.BELT:
        return this.belt()
      case INV_SLOT_ENUM.BOOTS:
        return this.boots()
      case INV_SLOT_ENUM.GLOVES:
        return this.gloves()
      case INV_SLOT_ENUM.HAND_ONE_LEFT:
        return this.hand_one_left()
      case INV_SLOT_ENUM.HAND_ONE_RIGHT:
        return this.hand_one_right()
      case INV_SLOT_ENUM.HAND_TWO_LEFT:
        return this.hand_two_left()
      case INV_SLOT_ENUM.HAND_TWO_RIGHT:
        return this.hand_two_right()
      case INV_SLOT_ENUM.HELMET:
        return this.helmet()
      case INV_SLOT_ENUM.RING_LEFT:
        return this.ring_left()
      case INV_SLOT_ENUM.RING_RIGHT:
        return this.ring_right()
      default:
        return undefined
    }
  }

  /**
   * CAUTION: 
   * calling this function assumes that the item is being set
   * in the correct slot
   * @param slot 
   * @param item 
   */
  public putInSlot(item: Equipment, slot: INV_SLOT_ENUM) {
    switch (slot) {
      case INV_SLOT_ENUM.AMULET:
        this.amulet.set(item)
        break;
      case INV_SLOT_ENUM.ARMOR:
        this.body_armor.set(item)
        break;
      case INV_SLOT_ENUM.BELT:
        this.belt.set(item)
        break;
      case INV_SLOT_ENUM.BOOTS:
        this.boots.set(item)
        break;
      case INV_SLOT_ENUM.GLOVES:
        this.gloves.set(item)
        break;
      case INV_SLOT_ENUM.HAND_ONE_LEFT:
        this.hand_one_left.set(item as Weapon)
        break;
      case INV_SLOT_ENUM.HAND_ONE_RIGHT:
        this.hand_one_right.set(item as Weapon)
        break;
      case INV_SLOT_ENUM.HAND_TWO_LEFT:
        this.hand_two_left.set(item as Weapon)
        break;
      case INV_SLOT_ENUM.HAND_TWO_RIGHT:
        this.hand_two_right.set(item as Weapon)
        break;
      case INV_SLOT_ENUM.HELMET:
        this.helmet.set(item)
        break;
      case INV_SLOT_ENUM.RING_LEFT:
        this.ring_left.set(item)
        break;
      case INV_SLOT_ENUM.RING_RIGHT:
        this.ring_right.set(item)
        break;
      default:
        break;
    }
  }

  /**
   * RETURN ITEM IN SLOT
   * SET ITEM TO EMPTY
   * 
   * @param slot 
   * @returns 
   */
  public takeFromSlot(slot: INV_SLOT_ENUM): Equipment | undefined {
    let removedItem = undefined
    switch (slot) {
      case INV_SLOT_ENUM.AMULET:
        removedItem = this.amulet()
        this.amulet.set(undefined)
        break;
      case INV_SLOT_ENUM.ARMOR:
        removedItem = this.body_armor()
        this.body_armor.set(undefined)
        break;
      case INV_SLOT_ENUM.BELT:
        removedItem = this.belt()
        this.belt.set(undefined)
        break;
      case INV_SLOT_ENUM.BOOTS:
        removedItem = this.boots()
        this.boots.set(undefined)
        break;
      case INV_SLOT_ENUM.GLOVES:
        removedItem = this.gloves()
        this.gloves.set(undefined)
        break;
      case INV_SLOT_ENUM.HAND_ONE_LEFT:
        removedItem = this.hand_one_left()
        this.hand_one_left.set(undefined)
        break;
      case INV_SLOT_ENUM.HAND_ONE_RIGHT:
        removedItem = this.hand_one_right()
        this.hand_one_right.set(undefined)
        break;
      case INV_SLOT_ENUM.HAND_TWO_LEFT:
        removedItem = this.hand_two_left()
        this.hand_two_left.set(undefined)
        break;
      case INV_SLOT_ENUM.HAND_TWO_RIGHT:
        removedItem = this.hand_two_right()
        this.hand_two_right.set(undefined)
        break;
      case INV_SLOT_ENUM.HELMET:
        removedItem = this.helmet()
        this.helmet.set(undefined)
        break;
      case INV_SLOT_ENUM.RING_LEFT:
        removedItem = this.ring_left()
        this.ring_left.set(undefined)
        break;
      case INV_SLOT_ENUM.RING_RIGHT:
        removedItem = this.ring_right()
        this.ring_right.set(undefined)
        break;
      default:
        break;
    }
    return removedItem
  }

  public sum_equipment_attributes() {
    return new Attributes()
  }

  public swapActiveHand() {
    if (this.selectedHand() === SELECTED_HAND.HAND_ONE) {
      this.selectedHand.update(() => SELECTED_HAND.HAND_TWO)
    } else {
      this.selectedHand.update(() => SELECTED_HAND.HAND_ONE)
    }
  }

}

export class SwapResult {
  item: Item | undefined
  hasSwapped: boolean
  constructor(
    item: Item | undefined,
    swapped: boolean,
  ) {
    this.item = item
    this.hasSwapped = swapped
  }
}

export enum SELECTED_HAND {
  HAND_ONE = "hand_one",
  HAND_TWO = "hand_two",
}

export const WEAPON_SLOTS = [
  INV_SLOT_ENUM.HAND_ONE_LEFT,
  INV_SLOT_ENUM.HAND_ONE_RIGHT,
  INV_SLOT_ENUM.HAND_TWO_LEFT,
  INV_SLOT_ENUM.HAND_TWO_RIGHT,
]