import { Akara } from "../../npcs/act1/akara/akara";
import { NPC } from "../../npcs/npc";
import { AreaLevel } from "../area";
import { Town } from "../town";
import { blood_moor_id } from "./blood_moor";


export const rogue_encampment_exits: string[] = [
    blood_moor_id
]

export const rogue_encampment_id:string = "rogue_encampment";

export const rogue_encampment_name:string = "Rogue Encampment";

export const rogue_encampment_area_level = new AreaLevel(1,36,67)

export const rogue_encampment_npcs: NPC[] = [
    Akara
]
