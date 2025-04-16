import { Effect } from "../../effects"
import { Entity } from "../../player/player"
import { Consumable, CONSUMABLE_TARGET_TYPE } from "../consumable"
import { Item } from "../item"

// POTIONS
export class Potion extends Item implements Consumable{
    charges: number
    target: CONSUMABLE_TARGET_TYPE = "entity"
    effect: Effect

    constructor(
        name: string,
        effect: Effect,
    ){
        super(name,[1,1],["inv","quick_bar"])
        this.charges = 1
        this.effect = effect
    }

    consume(target: Entity): boolean {
        throw new Error("Method not implemented.")
    }
}