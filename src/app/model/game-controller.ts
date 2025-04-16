import { blood_moor } from "./areas/act1/blood_moor"
import { rogue_encampment } from "./areas/act1/rogue_encampment"
import { Area } from "./areas/area"
import { Character } from "./player/player"

export class GameController {
    character: Character
    area: Area
    difficulty: GameDifficulty

    constructor(
        character: Character,
        area: Area,
        difficulty: GameDifficulty
    ) {
        this.character = character
        this.area = area
        this.difficulty = difficulty
    }

    changeArea(areaId: string) {
        let newArea = AREA_LIST.find(area => area.id === areaId)
        if (newArea != undefined) {
            this.area = newArea
        } else {
            alert("Error while trying to change area:" + areaId)
        }
    }
}
export class GameDifficulty {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

const AREA_LIST: Area[] = [
    rogue_encampment,
    blood_moor
]
