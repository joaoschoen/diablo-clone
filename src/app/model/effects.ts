export class Effect{
    name: string
    duration: number
    duration_additive: boolean
    duration_set: boolean
    amount: number
    amount_additive: boolean
    amount_set: boolean

    constructor(
        name: string,
        // attribute:
        duration: number,
        duration_additive: boolean,
        duration_set: boolean,
        amount: number,
        amount_additive: boolean,
        amount_set: boolean,
    ){
        this.name = name
        this.duration = duration
        this.duration_additive = duration_additive
        this.duration_set = duration_set
        this.amount = amount
        this.amount_additive = amount_additive
        this.amount_set = amount_set
    }
}
// https://www.purediablo.com/forums/threads/so-how-does-potions-really-work.128455/
// https://diablo2.wiki.fextralife.com/Defense+Potions
// https://diablo-archive.fandom.com/wiki/Potions_(Diablo_II)
// https://diablo.fandom.com/wiki/Open_Wounds