import { Component, computed, inject } from '@angular/core';
import { CharacterService } from '@services/character/character.service';
import { InventoryService } from '@services/inventory/inventory.service';
import { BACKGROUND_IMAGES, INV_SLOT_BG } from '@shared/enum/image-url.enum';
import { BackgroundImageComponent } from "../../../components/background-image/background-image.component";
import { HP_MP_COLOR, HpMpComponent } from "./hp-mp/hp-mp.component";

@Component({
  selector: 'app-player-hud',
  imports: [HpMpComponent, BackgroundImageComponent],
  templateUrl: './player-hud.component.html',
})
export class PlayerHudComponent {
  inventoryService = inject(InventoryService)
  characterService = inject(CharacterService)
  handleToggleInventory() {
    this.inventoryService.toggleInventory()
  }

  bg_quick_bar = computed(() => {
    let style = "background-image: url("
    style += INV_SLOT_BG.INV_SLOT
    style += ");"
    return style
  })

  bg_stone = BACKGROUND_IMAGES.STONE

  color_enum = HP_MP_COLOR
}
