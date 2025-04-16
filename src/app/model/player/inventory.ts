import { v4 as uuid } from "uuid"
import { Item } from "../item/item"

export class Inventory {
    slots: InventoryRow[]
    item_list: Array<Item> = []

    constructor(
        x:number,
        y:number,
    ){        
        let rows: InventoryRow[] = []
        for (let i = 0; i < y; i++) {
            let newRow: InventoryRow = {
                row:[]
            }
            for (let j = 0; j < x; j++) {
                let slot: Slot = {
                    id:uuid(),
                    item_id:""
                }
                
                newRow.row.push(slot)
            }
            rows.push(newRow)
        }
        this.slots = rows
    }
}

class InventoryRow{
    row: Slot[]

    constructor(
        row: Slot[]
    ){
        this.row = row
    }
}

class Slot {
    item_id:string
    id: string

    constructor(
        item_id: string,
        id: string,
    ){
        this.item_id = item_id
        this.id = id
    }
}