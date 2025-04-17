import { v4 as uuid } from "uuid"
import { Vector2D } from "../geometry"

type Slot = 
    |"inv" 
    |"quick_bar" 
    |"1h" 
    |"2h" 
    |"offhand" 
    |"helmet" 
    |"armor" 
    |"belt"
    |"gloves"
    |"boots"
    |"ring"
    |"amulet"

export class Item {
    name: string
    image:string
    id: string
    size: Vector2D
    slots: Slot[]
    constructor(
        name: string,
        image:string,
        size: Vector2D,
        slots: Slot[],
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
        image:string,
        slots: Slot[],
        size: Vector2D,
        isIdentified: boolean,
    ) {
        super(name,image,size,slots)
        this.isIdentified = isIdentified
    }
}

export class ItemSize {

}
// https://dropcalc.silospen.com/
// https://diablo-archive.fandom.com/wiki/Items_(Diablo_II)