import { Area, AreaLevel } from "./area";

export class Town extends Area{

    constructor(id:string,name:string,level:AreaLevel,exits:string[]){
        super(id,name,level,exits)
    }
}