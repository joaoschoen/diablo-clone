import { Character } from "./player/player"

export class GameController {
    character: Character
    area: Area
    difficulty: GameDifficulty

    constructor(
        character: Character,
        area: Area,
        difficulty: GameDifficulty
    ){
        this.character = character
        this.area = area
        this.difficulty = difficulty
    }
}

export class Area{
    name: string
    lvl: number
    isTown: boolean

    constructor(
        name: string,
        lvl: number,
        isTown: boolean
    ){
        this.name = name
        this.lvl = lvl
        this.isTown = isTown
    }
}

export class GameDifficulty{
    name: string
    constructor(name: string){
        this.name = name
    }
}