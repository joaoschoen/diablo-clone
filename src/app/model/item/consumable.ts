import { Item } from "./item"

export type CONSUMABLE_TARGET_TYPE = 
    | "item"
    | "equipment"
    | "area"
    | "entity"

export interface Consumable {
    charges: number
    target: CONSUMABLE_TARGET_TYPE
    // Consume functions should return true if the item was consumed and false if it wasn't
    consume(target: any): boolean
}

export interface Stackable {
    maxCharges: number
    receivesFrom: any[]
    merge(item: Consumable):boolean
}

export function addCharges(target: Consumable&Stackable, itemUsed: Consumable): boolean{
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

export function isMergeable(target: Stackable, itemUsed: Consumable): boolean {
    return target.receivesFrom.includes(itemUsed.constructor as typeof Item);
}
