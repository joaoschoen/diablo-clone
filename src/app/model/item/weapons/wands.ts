import { Vector2D } from "@model/geometry";
import { ItemQuality } from "@shared/enum/item-quality.enum";
import { ItemType } from "@shared/enum/item-type.enum";
import { Terminology } from "@shared/enum/terminology.enum";
import { WEAPON_WIELDING_ENUM } from "@shared/enum/weapon.enum";
import { INV_SLOT_ENUM } from "@shared/types/slot.type";
import { WeaponAttributes } from "@shared/types/weapon_attributes.type";
import { Weapon } from "../weapon";

export class Wands
    extends Weapon {
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
        attributes: WeaponAttributes,
        wielding: WEAPON_WIELDING_ENUM
    ) {
        super(
            name,
            image,
            size,
            slots,
            type,
            quality,
            terminology,
            level,
            isIdentified,
            attributes,
            wielding,
        );
    }
}
