import { NPC } from "../npcs/npc"
import { DIFFICULTY_ENUM } from "../player/difficulty"

export class Area{
    id: string
    name: string
    area_level: AreaLevel
    difficulty: DIFFICULTY_ENUM
    exits: string[]
    npcs: NPC[]

    constructor(
        id: string,
        name: string,
        area_level: AreaLevel,
        difficulty: DIFFICULTY_ENUM,
        exits: string[],
        npcs: NPC[],
    ){
        this.id = id
        this.name = name
        this.area_level = area_level
        this.difficulty = difficulty
        this.exits = exits
        this.npcs = npcs
    }
}

export class AreaLevel{
    normal:number
    nightmare:number
    hell:number

    constructor(
        normal:number,
        nightmare:number,
        hell:number,
    ){
        this.normal = normal
        this.nightmare = nightmare
        this.hell = hell
    }
}