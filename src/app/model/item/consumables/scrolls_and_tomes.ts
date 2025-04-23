import { INV_SLOT_ENUM } from "src/app/shared/types/slot.type"
import { ItemQuality } from "../../../shared/enum/item-quality.enum"
import { ItemType } from "../../../shared/enum/item-type.enum"
import { Terminology } from "../../../shared/enum/terminology.enum"
import { Area } from "../../areas/area"
import { Dungeon } from "../../areas/dungeon"
import { Vector2D } from "../../geometry"
import { addCharges, Consumable, CONSUMABLE_TARGET_TYPE, Stackable } from "../consumable"
import { Equipment, Item } from "../item"

const POTION_IMAGE = "items/Minorhealing.webp"
const SCROLL_IDENTIFY_IMAGE = "items/Misc/Scroll of Identify.bmp"
const TOME_IDENTIFY_IMAGE = "items/Misc/Tome of Identify.bmp"

export class ScrollIdentify extends Item implements Consumable {
    public charges: number;
    public target: CONSUMABLE_TARGET_TYPE = "equipment";

    public constructor() {
        super("Scroll of Identify", SCROLL_IDENTIFY_IMAGE, new Vector2D(1, 1), [INV_SLOT_ENUM.INV, INV_SLOT_ENUM.QUICK_BAR], ItemType.Scroll, ItemQuality.Magic, Terminology.Scroll);
        this.charges = 1;
    }

    public consume(target: any): boolean {
        return identify(target, this);
    }
}

export class TomeIdentify extends Item implements Consumable, Stackable {
    public charges: number;
    public target: CONSUMABLE_TARGET_TYPE = "equipment";
    public maxCharges: number;
    public receivesFrom = [TomeIdentify, ScrollIdentify];

    public constructor(charges: number) {
        super("Tome of Identify", TOME_IDENTIFY_IMAGE, new Vector2D(1, 2), [INV_SLOT_ENUM.INV], ItemType.Tome, ItemQuality.Magic, Terminology.Tome);
        this.charges = charges;
        this.maxCharges = 20;
    }

    public consume(target: Item): boolean {
        return identify(target, this);
    }

    public merge(item: Consumable): boolean {
        return addCharges(this, item);
    }
}

export class ScrollTownPortal extends Item implements Consumable {
    public charges: number;
    public target: CONSUMABLE_TARGET_TYPE = "area";

    public constructor() {
        super("Scroll of Town Portal", POTION_IMAGE, new Vector2D(1, 1), [INV_SLOT_ENUM.INV, INV_SLOT_ENUM.QUICK_BAR], ItemType.Scroll, ItemQuality.Magic, Terminology.Scroll);
        this.charges = 1;
    }

    public consume(target: Area): boolean {
        return townPortal(target);
    }
}

export class TomeTownPortal extends Item implements Consumable, Stackable {
    public charges: number;
    public target: CONSUMABLE_TARGET_TYPE = "area";
    public maxCharges: number;
    public receivesFrom = [TomeIdentify, ScrollIdentify];

    public constructor(charges: number) {
        super("Tome of Identify", POTION_IMAGE, new Vector2D(1, 2), [INV_SLOT_ENUM.INV], ItemType.Tome, ItemQuality.Magic, Terminology.Tome);
        this.charges = charges;
        this.maxCharges = 20;
    }

    public consume(target: Area): boolean {
        return townPortal(target);
    }

    public merge(item: Consumable): boolean {
        return addCharges(this, item);
    }
}

export function townPortal(target: Area): boolean {
    if (target instanceof Dungeon) {
        target.openTownPortal();
        return true;
    }
    return false;
}

export function identify(target: any, itemUsed: Consumable) {
    if (target instanceof Equipment) {
        if (!target.isIdentified) {
            target.isIdentified = true;
            itemUsed.charges -= 1;
            return true;
        } else {
            return false;
        }
    }
    return false;
}
