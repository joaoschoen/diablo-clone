import { NPC } from "../npcs/npc";
import { DIFFICULTY_ENUM } from "../player/difficulty";
import { Area, AreaLevel } from "./area";

export class Town extends Area{
    town_portal: string = ""

    constructor(id:string,
        name:string,
        level:AreaLevel,
        difficulty: DIFFICULTY_ENUM,
        exits:string[],
        npcs: NPC[],
    ){
        super(
            id,
            name,
            level,
            difficulty,
            exits,
            npcs,
        )
    }

    openTownPortal(target: string){
        this.town_portal = target
    }
}