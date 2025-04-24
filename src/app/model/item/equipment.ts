import { Vector2D } from "@model/geometry";
import { ItemQuality } from "src/app/shared/enum/item-quality.enum";
import { ItemType } from "src/app/shared/enum/item-type.enum";
import { Terminology } from "src/app/shared/enum/terminology.enum";
import { INV_SLOT_ENUM } from "src/app/shared/types/slot.type";
import { Item } from "./item";

export class Equipment extends Item {
    public level: number;
    public isIdentified: boolean;

    public constructor(
        name: string,
        image: string,
        size: Vector2D,
        slots: INV_SLOT_ENUM[],
        type: ItemType,
        quality: ItemQuality,
        terminology: Terminology,
        level: number,
        isIdentified: boolean
    ) {
        super(
            name,
            image,
            size,
            slots,
            type,
            quality,
            terminology
        );
        this.level = level;
        this.isIdentified = isIdentified;
    }
}

// https://dropcalc.silospen.com/
// https://diablo-archive.fandom.com/wiki/Items_(Diablo_II)