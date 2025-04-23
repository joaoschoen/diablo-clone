import { Component, computed, input } from '@angular/core';
import { ItemLocation } from '@model/player/inventory';
import { GameController } from '@model/game-controller';

@Component({
  selector: 'app-inventory-item',
  imports: [],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.css',
  host:{
    "[class]":"host_class()",
    "[style]":"host_style()"
  }
})
export class InventoryItemComponent {
  item_location = input.required<ItemLocation>()
  host_class = computed<string>(()=>{
    let size = this.item_location().item.size
    let width = 32* size.x
    let height = 32* size.y
    return `absolute inset-0 pointer-events-auto z-10 object-cover w-[${width}px] h-[${height}px]`
  })
  host_style = computed<string>(()=>{
    let location = this.item_location().location
    let left = 32 * location.x
    let top = 32 * location.y
    return `left:${left}px; top:${top}px;`
  })
}
