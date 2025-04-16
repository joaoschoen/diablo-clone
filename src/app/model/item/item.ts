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

// https://dropcalc.silospen.com/
// https://diablo-archive.fandom.com/wiki/Items_(Diablo_II)