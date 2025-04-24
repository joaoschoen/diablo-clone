import { Vector2D } from "@model/geometry";
import { ItemQuality } from "../../../shared/enum/item-quality.enum";
import { ItemType } from "../../../shared/enum/item-type.enum";
import { Terminology } from "../../../shared/enum/terminology.enum";
import { INV_SLOT_ENUM } from "../../../shared/types/slot.type";
import { Equipment } from "../item";

export class AssassinKatars extends Equipment {
    public attributes: string;
    // TODO: work and fix attributes

    public constructor(
        name: string,
        image: string,
        size: Vector2D,
        slots: INV_SLOT_ENUM[],
        type: ItemType,
        quality: ItemQuality,
        terminology: Terminology,
        level: number,
        isIdentified: boolean,
        attributes: string) {
        super(
            name,
            image,
            size,
            slots,
            type,
            quality,
            terminology,
            level,
            isIdentified
        );
        this.attributes = attributes
    }
}