import { Vector2D } from "@model/geometry";
import { ItemQuality } from "src/app/shared/enum/item-quality.enum";
import { ItemType } from "src/app/shared/enum/item-type.enum";
import { Terminology } from "src/app/shared/enum/terminology.enum";
import { WEAPON_WIELDING_ENUM } from "src/app/shared/enum/weapon.enum";
import { INV_SLOT_ENUM } from "src/app/shared/types/slot.type";
import { WeaponAttributes } from "src/app/shared/types/weapon_attributes.type";
import { Equipment } from "./equipment";

export class Weapon extends Equipment {
    public wielding: WEAPON_WIELDING_ENUM
    public attributes: WeaponAttributes;

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
        wielding: WEAPON_WIELDING_ENUM,
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
        );
        this.attributes = attributes
        this.wielding = wielding
    }
}


// https://dropcalc.silospen.com/
// https://diablo-archive.fandom.com/wiki/Items_(Diablo_II)