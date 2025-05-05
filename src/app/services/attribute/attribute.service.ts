import { computed, Injectable, signal } from '@angular/core';
import { Equipment } from '@model/item/equipment';
import { Attributes } from '@model/player/player';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
  base_attributes = signal<Attributes>(new Attributes())
  distributed_attributes = signal<Attributes>(new Attributes())
  equipment_attributes = signal<Attributes>(new Attributes())
  effect_attributes = signal<Attributes>(new Attributes())
  final_attributes = signal<Attributes>(new Attributes())


  current_health = computed(() => {
    return 55
  })

  max_health = computed(() => {
    return 100
  })
  constructor() { }

  /**
   * Validates if can equip against character attributes
   * @param item 
   * @returns 
   */
  public canEquip(item: Equipment): boolean {
    // TODO
    return true
  }

  public calcFinalAttributes(): boolean {
    // TODO
    return true
  }
}
