import { NPC } from "../npcs/npc";
import { DIFFICULTY_ENUM } from "../player/difficulty";
import { Zone, ZoneLevel } from "./zone";

export class Dungeon extends Zone {
    hasTownPortal: boolean = false
    has_waypoint: boolean;

    constructor(id: string,
        name: string,
        level: ZoneLevel,
        difficulty: DIFFICULTY_ENUM,
        has_waypoint: boolean,
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
        this.has_waypoint = has_waypoint
    }

    openTownPortal() {
        this.hasTownPortal = true
    }

    closeTownPortal() {
        this.hasTownPortal = false
    }
}