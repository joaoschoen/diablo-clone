import { DIFFICULTY_ENUM } from "@model/player/difficulty";
import { NPC } from "../../npcs/npc";
import { Dungeon } from "../dungeon";
import { ZoneLevel } from "../zone";
import { rogue_encampment_id } from "./rogue_encampment";

export const blood_moor_exits: string[] = [
    rogue_encampment_id
]

export const blood_moor_id: string = "blood_moor";

export const blood_moor_name: string = "Blood Moor";

export const blood_moor_waypoint: boolean = false;

export const blood_moor_zone_level = new ZoneLevel(1, 36, 67)

export const blood_moor_npcs: NPC[] = []

export class BloodMoor extends Dungeon {
    constructor(difficulty: DIFFICULTY_ENUM) {
        super(
            blood_moor_id,
            blood_moor_name,
            blood_moor_zone_level,
            difficulty,
            blood_moor_waypoint,
            blood_moor_exits,
            blood_moor_npcs,
        )
    }
}