import { ACT_ENUM } from "@shared/enum/act.enum";
import { DIFFICULTY_ENUM } from "../../player/difficulty";
import { Act } from "../act";
import { Dungeon } from "../dungeon";
import { BloodMoor } from "./blood_moor";
import { RogueEncampment } from "./rogue_encampment";

export function generate_act_1(difficulty: DIFFICULTY_ENUM): Act {
    // Act
    const act_id = ACT_ENUM.ACT1

    // Town
    const rogue_encampment = new RogueEncampment(difficulty)

    // Dungeons
    const blood_moor = new BloodMoor(difficulty)
    const dungeons: Dungeon[] = [blood_moor]

    let act = new Act(rogue_encampment, dungeons, act_id)
    return act
}
