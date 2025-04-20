import { ItemQuality } from "../../../shared/enum/item-quality.enum";
import { ItemType } from "../../../shared/enum/item-type.enum";
import { Terminology } from "../../../shared/enum/terminology.enum";
import { Area } from "../../areas/area";
import { Dungeon } from "../../areas/dungeon";
import { addCharges, Consumable, CONSUMABLE_TARGET_TYPE, Stackable } from "../consumable";
import { Equipment, Item } from "../item";

export class ScrollIdentify extends Item implements Consumable {
    public charges: number;
    public target: CONSUMABLE_TARGET_TYPE = "equipment";

    public constructor() {
        super("Scroll of Identify", [1, 1], ["inv", "quick_bar"], ItemType.Scroll, ItemQuality.Magic, Terminology.Scroll);
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
        super("Tome of Identify", [1, 2], ["inv"], ItemType.Tome, ItemQuality.Magic, Terminology.Tome);
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
        super("Scroll of Town Portal", [1, 1], ["inv", "quick_bar"], ItemType.Scroll, ItemQuality.Magic, Terminology.Scroll);
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
        super("Tome of Identify", [1, 2], ["inv"], ItemType.Tome, ItemQuality.Magic, Terminology.Tome);
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
