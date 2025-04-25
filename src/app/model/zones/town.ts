import { NPC } from "../npcs/npc";
import { DIFFICULTY_ENUM } from "../player/difficulty";
import { Zone, ZoneLevel } from "./zone";

export class Town extends Zone {
    town_portal: string = ""

    constructor(id: string,
        name: string,
        level: ZoneLevel,
        difficulty: DIFFICULTY_ENUM,
        exits: string[],
        npcs: NPC[],
    ) {
        super(
            id,
            name,
            level,
            difficulty,
            exits,
            npcs,
        )
    }

    openTownPortal(target: string) {
        this.town_portal = target
    }
}