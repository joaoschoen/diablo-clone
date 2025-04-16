import { AreaLevel } from "../area";
import { Dungeon } from "../dungeon";
import { rogue_encampment_id } from "./rogue_encampment";

export const blood_moor_exits: string[] = [
    rogue_encampment_id
]

export const blood_moor_id:string = "blood_moor";

export const blood_moor_area_level = new AreaLevel(1,36,67)

export const blood_moor = new Dungeon(blood_moor_id,"Blood Moor",blood_moor_area_level,false,blood_moor_exits)