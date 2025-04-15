import { Effect } from "../effects"
import { Equipment, Item } from "./item"

interface Consumable {
    charges: number
    // Consume functions should return true if the item was consumed and false if it wasn't
    consume(target: any): boolean
}

interface Stackable {
    maxCharges: number
    receivesFrom: any[]
    merge(item: Consumable):boolean
}

// SCROLLS AND TOMES

export class ScrollIdentify extends Item implements Consumable {
    charges: number

    constructor() {
        super("Scroll of identify",["inv","quick_bar"])
        this.charges = 1
    }
    consume(target: any): boolean {
        return identify(target,this)
    }
}

export class TomeIdentify extends Item implements Consumable,Stackable{
    charges: number
    maxCharges: number
    receivesFrom = [TomeIdentify,ScrollIdentify]

    constructor(charges: number) {
        super("Tome of Identify",["inv"])
        this.charges = charges
        this.maxCharges = 20
    }

    consume(target: Item): boolean {
        return identify(target,this)
    }

    merge(item: Consumable): boolean {
        return addCharges(this,item)
    }
}

// POTIONS
type PotionAttribute = 
    |"hp"
    |"mp"
    |"poison"
    |"cold"
    |"stamina"

export class Potion extends Item implements Consumable{
    charges: number
    effect: Effect

    constructor(
        name: string,
        effect: Effect
    ){
        super(name,["inv","quick_bar"])
        this.charges = 1
        this.effect = effect
    }

    consume(target: any): boolean {
        throw new Error("Method not implemented.")
    }

}


function addCharges(target: Consumable&Stackable, itemUsed: Consumable): boolean{
    if(isMergeable(target,itemUsed)){
        let target_new_charges 
        let itemUsed_new_charges 
        if(target.charges + itemUsed.charges > target.maxCharges){
            target_new_charges = target.maxCharges
            itemUsed_new_charges = (target.maxCharges) - (target.charges + itemUsed.charges)
        } else{
            target_new_charges = target.charges + itemUsed.charges
            itemUsed_new_charges = 0
        }
        target.charges = itemUsed.charges = target_new_charges
        itemUsed.charges = itemUsed_new_charges
        return true
    }
    return false
}

function isMergeable(target: Stackable, itemUsed: Consumable): boolean {
    return target.receivesFrom.includes(itemUsed.constructor as typeof Item);
}

function identify(target: any, itemUsed: Consumable){
    if (target instanceof Equipment) {
        if (!target.isIdentified) {
            target.isIdentified = true
            itemUsed.charges -= 1
            return true
        } else {
            return false
        }
    }
    return false
}
