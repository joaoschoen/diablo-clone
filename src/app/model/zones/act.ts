import { ACT_ENUM } from "@shared/enum/act.enum";
import { Dungeon } from "./dungeon";
import { Town } from "./town";
import { Zone } from "./zone";

export class Act {
    town: Town
    zones: Dungeon[]
    id: ACT_ENUM

    constructor(
        town: Town,
        zones: Dungeon[],
        id: ACT_ENUM,
    ) {
        this.town = town
        this.zones = zones
        this.id = id
    }

    openTownPortal(zoneId: string) {
        this.zones.forEach((dungeon) => {
            if (dungeon.id === zoneId) {
                dungeon.openTownPortal()
            } else {
                dungeon.closeTownPortal()
            }
        })
        this.town.openTownPortal(zoneId)
    }

    findZone(zoneId: string): Zone | undefined {
        if (this.town.id === zoneId) {
            return this.town
        } else {
            for (let i = 0; i < this.zones.length; i++) {
                if (this.zones[i].id === zoneId) {
                    return this.zones[i]
                }
            }
        }
        return undefined
    }

    cloneAct(): Act {
        let act = new Act(
            this.town,
            this.zones,
            this.id
        )
        return act
    }
}
