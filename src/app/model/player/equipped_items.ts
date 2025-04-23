import { INV_SLOT_ENUM } from "@model/item/item"

export class EquipmentSlot {
    item_id: string
    accepts: INV_SLOT_ENUM[]

    constructor(
        item_id: string,
        accepts: INV_SLOT_ENUM[]
    ) {
        this.item_id = item_id
        this.accepts = accepts
    }
}


export enum INV_SLOT_BG {
    INV_SLOT = "items/inv_bg_empty_slot.bmp",
    WEAPON = "items/inv_bg_weapon.bmp",
    HELMET = "items/inv_bg_helm.bmp",
    ARMOR = "items/inv_bg_armor.bmp",
    BELT = "items/inv_bg_belt.bmp",
    GLOVES = "items/inv_bg_gloves.bmp",
    BOOTS = "items/inv_bg_boots.bmp",
    RING = "items/inv_bg_ring.bmp",
    AMULET = "items/inv_bg_amulet.bmp",
}