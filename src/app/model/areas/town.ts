import { NPC } from "../npcs/npc";
import { Area, AreaLevel } from "./area";

export class Town extends Area{

    constructor(id:string,
        name:string,
        level:AreaLevel,
        exits:string[],
        npcs: NPC[],
    ){
        super(
            id,
            name,
            level,
            true, // All towns have waypoints
            exits,
            npcs,
        )
    }
}