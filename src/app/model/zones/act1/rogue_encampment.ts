import { DIFFICULTY_ENUM } from "@model/player/difficulty";
import { Akara } from "../../npcs/act1/akara";
import { NPC } from "../../npcs/npc";
import { Town } from "../town";
import { ZoneLevel } from "../zone";
import { blood_moor_id } from "./blood_moor";


export const rogue_encampment_exits: string[] = [
    blood_moor_id
]

export const rogue_encampment_id: string = "rogue_encampment";

export const rogue_encampment_name: string = "Rogue Encampment";

export const rogue_encampment_zone_level = new ZoneLevel(1, 36, 67)

export const rogue_encampment_npcs: NPC[] = [
    Akara
]

export class RogueEncampment extends Town {
    constructor(difficulty: DIFFICULTY_ENUM) {
        super(
            rogue_encampment_id,
            rogue_encampment_name,
            rogue_encampment_zone_level,
            difficulty,
            rogue_encampment_exits,
            rogue_encampment_npcs
        )
    }
}