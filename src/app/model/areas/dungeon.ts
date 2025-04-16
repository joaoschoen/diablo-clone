import { Area, AreaLevel } from "./area";

export class Dungeon extends Area{

    constructor(id:string,name:string,level:AreaLevel,has_waypoint:boolean,exits:string[]){
        super(id,name,level,has_waypoint,exits)
    }
}