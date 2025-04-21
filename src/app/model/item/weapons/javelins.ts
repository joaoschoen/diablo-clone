import { ItemQuality } from "../../../shared/enum/item-quality.enum";
import { ItemType } from "../../../shared/enum/item-type.enum";
import { Terminology } from "../../../shared/enum/terminology.enum";
import { Slot } from "../../../shared/types/slot.type";
import { Equipment } from "../item";

export class Javelins extends Equipment {
    public attributes: string;
    // TODO: work and fix attributes

    public constructor(name: string, size: number[], slots: Slot[], type: ItemType, quality: ItemQuality, terminology: Terminology,
        level: number, isIdentified: boolean, attributes: string) {
        super(name, size, slots, type, quality, terminology, level, isIdentified);
        this.attributes = attributes
    }
}