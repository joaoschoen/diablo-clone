import { Dungeon } from "./dungeon";
import { Town } from "./town";

export class Act{
    town: Town
    dungeons: Dungeon[]
    id: ACT_ENUM

    constructor(
        town: Town,
        dungeons: Dungeon[],
        id: ACT_ENUM,
    ){
        this.town = town
        this.dungeons = dungeons
        this.id = id
    }

    openTownPortal(areaId: string){
        this.dungeons.forEach((dungeon)=>{
            if(dungeon.id === areaId){
                dungeon.openTownPortal()
            } else {
                dungeon.closeTownPortal()
            }
        })
        this.town.openTownPortal(areaId)
    }

    findArea(areaId:string):boolean{
        if(this.town.id === areaId){
            return true
        } else {
            for (let i = 0; i < this.dungeons.length; i++) {
                if(this.dungeons[i].id === areaId){
                    return true
                }                
            }
        }
        return false
    }
}

export enum ACT_ENUM {
    ACT1 = 1,
    ACT2 = 2,
    ACT3 = 3,
    ACT4 = 4,
    ACT5 = 5,
}
