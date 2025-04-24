import { Injectable, signal } from '@angular/core';
import { Equipment } from '@model/item/item';
import { INV_SLOT_ENUM } from 'src/app/shared/types/slot.type';

@Injectable({
  providedIn: 'root'
})
export class EquippedItemsService {
  private hand_I_left = signal<Equipment | undefined>(undefined)
  private hand_II_left = signal<Equipment | undefined>(undefined)
  private left_ring = signal<Equipment | undefined>(undefined)
  private helmet = signal<Equipment | undefined>(undefined)
  private armor = signal<Equipment | undefined>(undefined)
  private belt = signal<Equipment | undefined>(undefined)
  private amulet = signal<Equipment | undefined>(undefined)
  private right_ring = signal<Equipment | undefined>(undefined)
  private hand_I_right = signal<Equipment | undefined>(undefined)
  private hand_II_right = signal<Equipment | undefined>(undefined)
  public selectedHand = signal<SELECTED_HAND>(SELECTED_HAND.HAND_ONE)

  constructor() { }

  swapItem(slot: INV_SLOT_ENUM[], item: Equipment | undefined): Equipment | undefined {
    console.log(slot)
    switch (slot[0]) {
      case INV_SLOT_ENUM.WEAPON:

        break;

      default:
        break;
    }
    return undefined
  }

  swapHand() {
    if (this.selectedHand() === SELECTED_HAND.HAND_ONE) {
      this.selectedHand.update(() => SELECTED_HAND.HAND_TWO)
    } else {
      this.selectedHand.update(() => SELECTED_HAND.HAND_ONE)
    }
  }
}


export enum SELECTED_HAND {
  HAND_ONE = "hand_one",
  HAND_TWO = "hand_two",
}