import { INV_SLOT_ENUM } from "src/app/shared/types/slot.type"

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

