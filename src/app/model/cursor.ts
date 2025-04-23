import { Item } from "./item/item"

export class Cursor{
    action: CURSOR_ACTION_ENUM = CURSOR_ACTION_ENUM.EMPTY
    item: Item|undefined = undefined

    constructor(){}
}




export enum CURSOR_ACTION_ENUM {
    HOLD = 1,
    USE = 2,
    EMPTY = 3,
    // ACT3 = 3,
    // ACT4 = 4,
    // ACT5 = 5,
}
