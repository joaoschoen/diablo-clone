import { v4 as uuid } from "uuid";
import { ItemQuality } from "../../shared/enum/item-quality.enum";
import { ItemType } from "../../shared/enum/item-type.enum";
import { Terminology } from "../../shared/enum/terminology.enum";
import { Slot } from "../../shared/types/slot.type";

export class Item {
    public name: string;
    public id: string;
    public size: number[];
    public slots: Slot[];

    public type: ItemType;
    public quality: ItemQuality;
    public terminology: Terminology;

    public constructor(name: string, size: number[], slots: Slot[], type: ItemType, quality: ItemQuality, terminology: Terminology) {
        this.name = name;
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

    public constructor(name: string, size: number[], slots: Slot[], type: ItemType, quality: ItemQuality, terminology: Terminology, level: number, isIdentified: boolean) {
        super(name, size, slots, type, quality, terminology);
        this.level = level;
        this.isIdentified = isIdentified;
    }
}

// https://dropcalc.silospen.com/
// https://diablo-archive.fandom.com/wiki/Items_(Diablo_II)