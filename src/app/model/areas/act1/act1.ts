import { DIFFICULTY_ENUM } from "../../player/difficulty";
import { Act, ACT_ENUM } from "../act";
import { Dungeon } from "../dungeon";
import { Town } from "../town";
import { blood_moor_area_level, blood_moor_exits, blood_moor_id, blood_moor_name, blood_moor_npcs, blood_moor_waypoint } from "./blood_moor";
import { rogue_encampment_area_level, rogue_encampment_exits, rogue_encampment_id, rogue_encampment_name, rogue_encampment_npcs } from "./rogue_encampment";

export function generate_act_1(difficulty:DIFFICULTY_ENUM): Act {
    const act_id = ACT_ENUM.ACT1

    // Town
    const rogue_encampment = new Town(
        rogue_encampment_id,
        rogue_encampment_name,
        rogue_encampment_area_level,
        difficulty,
        rogue_encampment_exits,
        rogue_encampment_npcs
    )

    // Dungeons
    const dungeons: Dungeon[] = []

    const blood_moor = new Dungeon(
        blood_moor_id,
        blood_moor_name,
        blood_moor_area_level,
        difficulty,
        blood_moor_waypoint,
        blood_moor_exits,
        blood_moor_npcs,
    )
    dungeons.push(blood_moor)

    let act = new Act(rogue_encampment, dungeons,act_id)
    return act
}
