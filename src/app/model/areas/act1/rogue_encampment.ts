import { AreaLevel } from "../area";
import { Dungeon } from "../dungeon";
import { Town } from "../town";
import { blood_moor_id } from "./blood_moor";


export const rogue_encampment_exits: string[] = [
    blood_moor_id
]

export const rogue_encampment_id:string = "rogue_encampment";

export const rogue_encampment_area_level = new AreaLevel(1,36,67)

export const rogue_encampment = new Town(rogue_encampment_id,"Rogue Encampment",rogue_encampment_area_level,rogue_encampment_exits)