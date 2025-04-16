import { Area, AreaLevel } from "./area";

export class Dungeon extends Area{

    constructor(id:string,name:string,level:AreaLevel,exits:string[]){
        super(id,name,level,exits)
    }
}