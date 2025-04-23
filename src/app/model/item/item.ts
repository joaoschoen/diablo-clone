import { v4 as uuid } from "uuid";
import { ItemQuality } from "../../shared/enum/item-quality.enum";
import { ItemType } from "../../shared/enum/item-type.enum";
import { Terminology } from "../../shared/enum/terminology.enum";
import { INV_SLOT_ENUM } from "../../shared/types/slot.type";
import { Vector2D } from "../geometry";

export class Item {
    public name: string;
    public image: string
    public id: string;
    public size: Vector2D;
    public slots: INV_SLOT_ENUM[];

    public type: ItemType;
    public quality: ItemQuality;
    public terminology: Terminology;

    public constructor(
        name: string,
        image: string,
        size: Vector2D,
        slots: INV_SLOT_ENUM[],
        type: ItemType,
        quality: ItemQuality,
        terminology: Terminology
    ) {
        this.name = name;
        this.image = image
        this.size = size;
        this.id = uuid();
        this.slots = slots;

        this.type = type;
        this.quality = quality;
        this.terminology = terminology;
    }
}

export class Equipment extends Item {
    public level: number;
    public isIdentified: boolean;

    public constructor(
        name: string,
        image: string,
        slots: INV_SLOT_ENUM[],
        size: Vector2D,
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