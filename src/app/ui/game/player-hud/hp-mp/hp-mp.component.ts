import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { AttributeService } from '@services/attribute/attribute.service';

@Component({
  selector: 'app-hp-mp',
  imports: [CommonModule],
  templateUrl: './hp-mp.component.html',
  host: {
    "class": "overflow-visible z-10"
  }
})
export class HpMpComponent {
  attributeService = inject(AttributeService)

  color = input.required<HP_MP_COLOR>()

  current_hp = computed(() => {
    let current_health = this.attributeService.current_health()
    let max_health = this.attributeService.max_health()
    let percentage = Math.ceil((current_health / max_health) * 100)
    return 100
    // return percentage
  })

  orbOffset() {
    if (this.color() === "hp") {
      return "margin-left:16px;box-shadow: inset 0 0 100px #000;"
    } else {
      return "margin-right:16px;box-shadow: inset 0 0 100px #000;"
    }
  }

  position() {
    if (this.color() === "hp") {
      return "left:0px;"
    } else {
      return "right:0px;"
    }
  }



  bg_color = computed(() => {
    let style = ""
    if (this.color() === HP_MP_COLOR.HP) {
      style += "height:" + this.current_hp() + "%;"
      style += "background-color: var(--color-red-500);"
      style += "box-shadow: inset 0 0 60px #000;"
      return style
    } else {
      style += this.current_hp()
      style += "background-color: var(--color-blue-500);"
      style += "box-shadow: inset 0 0 60px #000;"
      return style
    }
  })

  bg_empty = computed(() => {
    return "height: " + (100 - this.current_hp()) + "%;"
  })

}

export enum HP_MP_COLOR {
  HP = "hp",
  MP = "mp",
}