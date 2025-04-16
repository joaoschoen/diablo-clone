import { ACT, Act, DIFFICULTY, DifficultyType } from "./dificulty"

export class WaypointList {
    act1: ActWaypoint
    act2: ActWaypoint
    act3: ActWaypoint
    act4: ActWaypoint
    act5: ActWaypoint

    constructor(
        act1: ActWaypoint,
        act2: ActWaypoint,
        act3: ActWaypoint,
        act4: ActWaypoint,
        act5: ActWaypoint,
    ) {
        this.act1 = act1
        this.act2 = act2
        this.act3 = act3
        this.act4 = act4
        this.act5 = act5
    }

    unlockWaypoint(difficulty: DifficultyType, act: Act, area_id: string) {
        switch (act) {
            case ACT.ACT1:
                this.act1.unlockWaypoint(difficulty,area_id)
                break;
            case ACT.ACT2:
                this.act2.unlockWaypoint(difficulty,area_id)
                break;
            case ACT.ACT3:
                this.act3.unlockWaypoint(difficulty,area_id)
                break;
            case ACT.ACT4:
                this.act4.unlockWaypoint(difficulty,area_id)
                break;
            case ACT.ACT5:
                this.act5.unlockWaypoint(difficulty,area_id)
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
        waypointsList: Waypoint[],
    ) {
        this.waypointsList = waypointsList
    }

    unlockWaypoint(difficulty: DifficultyType, area_id: string) {
        let waypoint = this.waypointsList.find(waypoint => waypoint.area_id === area_id)
        if (waypoint === undefined) {
            alert(`Error while trying to unlock waypoint, difficulty: ${difficulty} area id:${area_id}`)
        } else {
            switch (difficulty) {
                case DIFFICULTY.NORMAL:
                    waypoint.normal = true
                    break;
                case DIFFICULTY.NIGHTMARE:
                    waypoint.nightmare = true
                    break;
                case DIFFICULTY.HELL:
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