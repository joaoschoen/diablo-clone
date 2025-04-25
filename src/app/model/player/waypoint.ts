import { ACT_ENUM } from "@shared/enum/act.enum"
import { DIFFICULTY_ENUM } from "./difficulty"

export class WaypointList {
    act1: ActWaypoint
    act2: ActWaypoint
    act3: ActWaypoint
    act4: ActWaypoint
    act5: ActWaypoint

    constructor(
        act1: ActWaypoint = new ActWaypoint(),
        act2: ActWaypoint = new ActWaypoint(),
        act3: ActWaypoint = new ActWaypoint(),
        act4: ActWaypoint = new ActWaypoint(),
        act5: ActWaypoint = new ActWaypoint(),
    ) {
        this.act1 = act1
        this.act2 = act2
        this.act3 = act3
        this.act4 = act4
        this.act5 = act5
    }

    unlockWaypoint(difficulty: DIFFICULTY_ENUM, act: ACT_ENUM, area_id: string) {
        switch (act) {
            case ACT_ENUM.ACT1:
                this.act1.unlockWaypoint(difficulty, area_id)
                break;
            case ACT_ENUM.ACT2:
                this.act2.unlockWaypoint(difficulty, area_id)
                break;
            case ACT_ENUM.ACT3:
                this.act3.unlockWaypoint(difficulty, area_id)
                break;
            case ACT_ENUM.ACT4:
                this.act4.unlockWaypoint(difficulty, area_id)
                break;
            case ACT_ENUM.ACT5:
                this.act5.unlockWaypoint(difficulty, area_id)
                break;
            default:
                alert(`Error while trying to unlock waypoint, act: ${act}`)
                break;
        }
    }
}

class ActWaypoint {
    waypointsList: Waypoint[]

    constructor(
        waypointsList: Waypoint[] = [],
    ) {
        this.waypointsList = waypointsList
    }

    unlockWaypoint(difficulty: DIFFICULTY_ENUM, area_id: string) {
        let waypoint = this.waypointsList.find(waypoint => waypoint.area_id === area_id)
        if (waypoint === undefined) {
            alert(`Error while trying to unlock waypoint, difficulty: ${difficulty} area id:${area_id}`)
        } else {
            switch (difficulty) {
                case DIFFICULTY_ENUM.NORMAL:
                    waypoint.normal = true
                    break;
                case DIFFICULTY_ENUM.NIGHTMARE:
                    waypoint.nightmare = true
                    break;
                case DIFFICULTY_ENUM.HELL:
                    waypoint.hell = true
                    break;
                default:
                    alert(`Error while trying to unlock waypoint, difficulty: ${difficulty} area id:${area_id}`)
                    break;
            }
        }
    }
}

class Waypoint {
    area_id: string
    normal: boolean
    nightmare: boolean
    hell: boolean

    constructor(
        area_id: string,
        normal: boolean,
        nightmare: boolean,
        hell: boolean,
    ) {
        this.area_id = area_id
        this.normal = normal
        this.nightmare = nightmare
        this.hell = hell
    }
}