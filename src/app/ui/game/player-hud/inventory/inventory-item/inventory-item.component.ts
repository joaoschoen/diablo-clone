import { Component, computed, input } from '@angular/core';
import { ItemLocation } from '@model/player/inventory';

@Component({
  selector: 'app-inventory-item',
  imports: [],
  templateUrl: './inventory-item.component.html',
  host: {
    "[class]": "host_class()",
    "[style]": "host_style()"
  }
})
export class InventoryItemComponent {
  item_location = input.required<ItemLocation>()
  host_class = computed<string>(() => {
    return `bg-blue-900/20
    absolute inset-0 pointer-events-auto 
    z-10 object-cover`
  })
  host_style = computed<string>(() => {
    let location = this.item_location().location
    let left = 32 * location.x
    let top = 32 * location.y
    let size = this.item_location().item.size
    let width = 32 * size.x
    let height = 32 * size.y
    return `left:${left}px; top:${top}px; width:${width}px; height:${height}px;`
  })
}
