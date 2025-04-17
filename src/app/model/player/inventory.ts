import { v4 as uuid } from "uuid"
import { Vector2D } from "../geometry"
import { Item } from "../item/item"

export const PLAYER_INVENTORY_DIMENSIONS = new Vector2D(10, 4)

export class Inventory {
    inventory_rows: InventoryRow[]
    item_list: Array<ItemLocation> = []
    size: Vector2D

    constructor(
        size: Vector2D,
        item_list: Array<ItemLocation>,
    ) {
        this.size = size
        let rows: InventoryRow[] = []
        for (let i = 0; i < size.y; i++) {
            let newRow: InventoryRow = {
                inventory_cols: [],
                id: uuid()
            }
            for (let j = 0; j < size.x; j++) {
                let slot: InventorySlot = {
                    id: uuid(),
                    item_id: "",
                    location: new Vector2D(j, i)
                }

                newRow.inventory_cols.push(slot)
            }
            rows.push(newRow)
        }
        this.inventory_rows = rows
        for (let item_location of item_list) {
            this.addItem(item_location.item, item_location.location)
        }
    }

    addItem(item: Item, location: Vector2D): boolean {
        let size = item.size
        let available = this.isTargetAvailable(location, size)
        // Debug message
        // console.log("available?",available)
        if (available) {
            let new_item_location = new ItemLocation(item, location)
            this.item_list.push(new_item_location)
            // Debug
            // let debugMessage = `inserting item
            //     size:${size.x},${size.y} 
            //     location:${location.x},${location.y}`
            // console.log(debugMessage)
            let start_x = location.x
            let start_y = location.y
            let end_x = location.x + size.x
            let end_y = location.y + size.y
            for (let y = start_y; y < end_y; y++) {
                for (let x = start_x; x < end_x; x++) {
                    this.inventory_rows[y].inventory_cols[x].item_id = item.id
                    return true
                }
            }
        }
        return false
    }

    getItemImage(item_id: string) {
        for (let item_location of this.item_list) {
            if (item_location.item.id === item_id) {
                return item_location.item.image
            }
        }
        return ""
    }

    isTargetAvailable(location: Vector2D, size: Vector2D, ignore_id?: string): boolean {
        let start_x = location.x
        let start_y = location.y
        let end_x = location.x + size.x
        let end_y = location.y + size.y
        let possible_ids = [""]
        if (ignore_id) {
            possible_ids.push(ignore_id)
        }
        for (let y = start_y; y < end_y; y++) {
            for (let x = start_x; x < end_x; x++) {
                // Debug message
                // console.log(`is available? x:${x},y:${y}`)
                if (y > this.size.y || x > this.size.x) {
                    return false
                }
                let slot_id = this.inventory_rows[y].inventory_cols[x].item_id
                if (!possible_ids.includes(slot_id)) {
                    return false
                }
            }
        }
        return true
    }

    removeItem(item_id: string): Item | undefined {
        // console.log("removing item with id:",item_id)
        // console.log("list length:",this.item_list.length)
        let index = this.item_list.findIndex((item_location) => item_location.item.id === item_id)
        if (index === -1) {
            return undefined
        }
        let removed_item = this.item_list.splice(index, 1)
        let size = removed_item[0].item.size
        let location = removed_item[0].location
        // Debug
        // let debugMessage = ""
        //     debugMessage+= `size:${size.x},${size.y} `
        //     debugMessage+= `location:${location.x},${location.y}`

        // console.log(debugMessage)
        let start_x = location.x
        let start_y = location.y
        let end_x = location.x + size.x
        let end_y = location.y + size.y
        for (let y = start_y; y < end_y; y++) {
            for (let x = start_x; x < end_x; x++) {
                this.inventory_rows[y].inventory_cols[x].item_id = ""
            }
        }
        return removed_item[0].item
    }
}

class InventoryRow {
    inventory_cols: InventorySlot[]
    id: string

    constructor(
        inventory_cols: InventorySlot[],
        id: string,
    ) {
        this.inventory_cols = inventory_cols
        this.id = id
    }
}

export class InventorySlot {
    item_id: string
    id: string
    location: Vector2D

    constructor(
        item_id: string,
        id: string,
        location: Vector2D,
    ) {
        this.item_id = item_id
        this.id = id
        this.location = location
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
