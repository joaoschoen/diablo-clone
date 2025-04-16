import { Area } from "../../areas/area"
import { Dungeon } from "../../areas/dungeon"
import { addCharges, Consumable, CONSUMABLE_TARGET_TYPE, Stackable } from "../consumable"
import { Equipment, Item } from "../item"

export class ScrollIdentify extends Item implements Consumable {
    charges: number
    target: CONSUMABLE_TARGET_TYPE = "equipment"

    constructor() {
        super("Scroll of identify", [1, 1], ["inv", "quick_bar"])
        this.charges = 1
    }
    
    consume(target: any): boolean {
        return identify(target, this)
    }
}

export class TomeIdentify extends Item implements Consumable, Stackable {
    charges: number
    target: CONSUMABLE_TARGET_TYPE = "equipment"
    maxCharges: number
    receivesFrom = [TomeIdentify, ScrollIdentify]

    constructor(charges: number) {
        super("Tome of Identify", [1, 2], ["inv"])
        this.charges = charges
        this.maxCharges = 20
    }

    consume(target: Item): boolean {
        return identify(target, this)
    }

    merge(item: Consumable): boolean {
        return addCharges(this, item)
    }
}

export class ScrollTownPortal extends Item implements Consumable {
    charges: number
    target: CONSUMABLE_TARGET_TYPE = "area"

    constructor() {
        super("Scroll of town portal", [1, 1], ["inv", "quick_bar"])
        this.charges = 1
    }

    consume(target: Area): boolean {
        return townPortal(target)
    }
}

export class TomeTownPortal extends Item implements Consumable, Stackable {
    charges: number
    target: CONSUMABLE_TARGET_TYPE = "area"
    maxCharges: number
    receivesFrom = [TomeIdentify, ScrollIdentify]

    constructor(charges: number) {
        super("Tome of Identify", [1, 2], ["inv"])
        this.charges = charges
        this.maxCharges = 20
    }

    consume(target: Area): boolean {
        return townPortal(target)
    }

    merge(item: Consumable): boolean {
        return addCharges(this, item)
    }
}

export function townPortal(target: Area): boolean {
    if (target instanceof Dungeon) {
        target.openTownPortal()
        return true
    }
    return false
}

export function identify(target: any, itemUsed: Consumable) {
    if (target instanceof Equipment) {
        if (!target.isIdentified) {
            target.isIdentified = true
            itemUsed.charges -= 1
            return true
        } else {
            return false
        }
    }
    return false
}
