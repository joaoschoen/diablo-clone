import { v4 as uuid } from "uuid"
import { Vector2D } from "../geometry"

export enum INV_SLOT_ENUM {
    INV = "inv",
    QUICK_BAR = "quick_bar",
    ONE_HANDED = "1h",
    TWO_HANDED = "2h",
    HAND_ONE_LEFT = "hand_one_left",
    HAND_ONE_RIGHT = "hand_one_right",
    HAND_TWO_LEFT = "hand_two_left",
    HAND_TWO_RIGHT = "hand_two_right",
    WEAPON = "weapon",
    OFFHAND = "offhand",
    HELMET = "helmet",
    ARMOR = "armor",
    BELT = "belt",
    GLOVES = "gloves",
    BOOTS = "boots",
    RING = "ring",
    AMULET = "amulet",
}

export class Item {
    name: string
    image: string
    id: string
    size: Vector2D
    slots: INV_SLOT_ENUM[]
    constructor(
        name: string,
        image: string,
        size: Vector2D,
        slots: INV_SLOT_ENUM[],
    ) {
        this.name = name
        this.image = image
        this.size = size
        this.id = uuid()
        this.slots = slots
    }
}


export class Equipment extends Item {
    isIdentified: boolean

    constructor(
        name: string,
        image: string,
        slots: INV_SLOT_ENUM[],
        size: Vector2D,
        isIdentified: boolean,
    ) {
        super(name, image, size, slots)
        this.isIdentified = isIdentified
    }
}

export class ItemSize {

}
// https://dropcalc.silospen.com/
// https://diablo-archive.fandom.com/wiki/Items_(Diablo_II)