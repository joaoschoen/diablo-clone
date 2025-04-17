import { Act, ACT_ENUM } from "./areas/act"
import { generate_act_1 } from "./areas/act1/act1"
import { Item } from "./item/item"
import { DIFFICULTY_ENUM } from "./player/difficulty"
import { Character } from "./player/player"

export class GameController {
    character: Character
    current_act: ACT_ENUM | undefined
    current_area: string | undefined
    cursor: Item|undefined
    acts: Act[] = []
    difficulty: DIFFICULTY_ENUM

    constructor(
        character: Character,
        act_to_build: ACT_ENUM,
        difficulty: DIFFICULTY_ENUM
    ) {
        this.character = character
        this.difficulty = difficulty
        this.generateAct(act_to_build, difficulty)
        this.current_act = act_to_build
        this.current_area = this.acts[act_to_build].town.id
    }

    changeArea(areaId: string, act_id: ACT_ENUM): boolean {
        if (this.current_act === act_id) {
            let found = this.acts[this.current_act].findArea(areaId)
            if (found) {
                this.current_area = areaId
                return true
            } else {
                return false
            }
        }
        if (this.acts[act_id] === undefined) {
            let generated
            try {
                generated = this.generateAct(act_id, this.difficulty)
                return this.changeArea(areaId, act_id)
            } catch (error) {
                alert(error)
                return false
            }
        } else {
            let found = this.acts[act_id].findArea(areaId)
            if (found) {
                this.current_area = areaId
                this.current_act = act_id
                return true
            } else {
                return false
            }
        }
    }

    generateAct(act_to_build: ACT_ENUM, difficulty: DIFFICULTY_ENUM) {
        let GeneratedAct: Act | undefined
        switch (act_to_build) {
            case ACT_ENUM.ACT1:
                GeneratedAct = generate_act_1(difficulty)
                break;
            default:
                throw new Error("Error building game controller, act not found:" + act_to_build);
        }
        if (GeneratedAct !== undefined) {
            this.acts[act_to_build] = GeneratedAct
        } else {
            throw new Error("Error while trying to generate act:" + act_to_build)
        }
    }
}
