import { v4 as uuid } from "uuid"
import { Item } from "../item/item"
import { Vector2D } from "../geometry"

export class Inventory {
    inventory_rows: InventoryRow[]
    item_list: Array<ItemLocation> = []

    constructor(
        x: number,
        y: number,
        item_list: Array<ItemLocation>,
    ) {
        let rows: InventoryRow[] = []
        for (let i = 0; i < y; i++) {
            let newRow: InventoryRow = {
                inventory_cols: [],
                id: uuid()
            }
            for (let j = 0; j < x; j++) {
                let slot: Slot = {
                    id: uuid(),
                    item_id: ""
                }

                newRow.inventory_cols.push(slot)
            }
            rows.push(newRow)
        }
        this.inventory_rows = rows
        for (let item_location of item_list) {
            this.addItem(item_location.item,item_location.location)
        }
    }

    addItem(item: Item, location: Vector2D): boolean {
        let size = item.size
        let available = this.isTargetAvailable(location, size)
        if (available) {
            let new_item_location = new ItemLocation(item, location)
            this.item_list.push(new_item_location)
            let start_x = location.x
            let start_y = location.y
            let end_x = location.x + size.x
            let end_y = location.y + size.y
            for (let i = start_x; i < end_x; i++) {
                for (let j = start_y; j < end_y; j++) {
                    this.inventory_rows[i].inventory_cols[j].item_id = item.id
                    return true
                }
            }
        }
        return false
    }

    getItemImage(item_id:string){
        for(let item_location of this.item_list){
            if(item_location.item.id === item_id){
                return item_location.item.image
            }
        }
        return ""
    }

    isTargetAvailable(location: Vector2D, size: Vector2D): boolean {
        let start_x = location.x
        let start_y = location.y
        let end_x = location.x + size.x
        let end_y = location.y + size.y
        for (let i = start_x; i <= end_x; i++) {
            for (let j = start_y; j <= end_y; j++) {
                if (this.inventory_rows[i].inventory_cols[j].item_id !== "") {
                    return false
                }
            }
        }
        return true
    }

    removeItem(item_id: string) {
        let index = this.item_list.findIndex((item_location) => item_location.item.id === item_id)
        let removed_item = this.item_list.splice(index, 1)
        let size = removed_item[0].item.size
        let location = removed_item[0].location
        let start_x = location.x
        let start_y = location.y
        let end_x = location.x + size.x
        let end_y = location.y + size.y
        for (let i = start_x; i < end_x; i++) {
            for (let j = start_y; j < end_y; j++) {
                this.inventory_rows[i].inventory_cols[j].item_id = ""
            }
        }
    }
}

class InventoryRow {
    inventory_cols: Slot[]
    id: string

    constructor(
        inventory_cols: Slot[],
        id: string,
    ) {
        this.inventory_cols = inventory_cols
        this.id = id
    }
}

class Slot {
    item_id: string
    id: string

    constructor(
        item_id: string,
        id: string,
    ) {
        this.item_id = item_id
        this.id = id
    }
}

export class ItemLocation {
    item: Item
    location: Vector2D

    constructor(
        item: Item,
        location: Vector2D,
    ) {
        this.item = item
        this.location = location
    }
}
