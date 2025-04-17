import { v4 as uuid } from "uuid"

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
    id: string
    size: number[]
    slots: Slot[]
    constructor(
        name: string,
        size: number[],
        slots: Slot[],
    ) {
        this.name = name
        this.size = size
        this.id = uuid()
        this.slots = slots
    }
}


export class Equipment extends Item {
    isIdentified: boolean

    constructor(
        name: string,
        slots: Slot[],
        size: number[],
        isIdentified: boolean,
    ) {
        super(name,size,slots)
        this.isIdentified = isIdentified
    }
}

// https://dropcalc.silospen.com/
// https://diablo-archive.fandom.com/wiki/Items_(Diablo_II)