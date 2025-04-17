import { Effect } from "../../effects"
import { Vector2D } from "../../geometry"
import { Entity } from "../../player/player"
import { Consumable, CONSUMABLE_TARGET_TYPE } from "../consumable"
import { Item } from "../item"

const POTION_IMAGE = "items/Minorhealing.webp"
// POTIONS
export class Potion extends Item implements Consumable{
    charges: number
    target: CONSUMABLE_TARGET_TYPE = "entity"
    effect: Effect

    constructor(
        name: string,
        effect: Effect,
    ){
        super(name,POTION_IMAGE,new Vector2D(1,1),["inv","quick_bar"])
        this.charges = 1
        this.effect = effect
    }

    consume(target: Entity): boolean {
        throw new Error("Method not implemented.")
    }
}