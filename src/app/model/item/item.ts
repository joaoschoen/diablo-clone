import { Area, GameController } from "../game-controller"
import { Mercenary } from "../player/mercenary"
import { Character } from "../player/player"

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
    slots: Slot[]
    constructor(
        name: string,
        slots: Slot[],
    ) {
        this.name = name
        this.slots = slots
    }
}

export class Equipment extends Item {
    isIdentified: boolean

    constructor(
        name: string,
        isIdentified: boolean,
        slots: Slot[],
    ) {
        super(name,slots)
        this.isIdentified = isIdentified
    }
}
