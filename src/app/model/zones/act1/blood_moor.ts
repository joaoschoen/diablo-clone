import { NPC } from "../../npcs/npc";
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
