import { Quest } from "../player/quests"
import { Shop } from "../shop/shop"
import { Dialogue } from "./dialogue"

export class NPC {
    name: string
    id: string
    shop: Shop
    quests: Quest[]
    dialogue: Dialogue[]
    introduction_played:boolean

    constructor(
        name: string,
        id: string,
        has_shop: Shop,
        quests: Quest[],
        dialogue: Dialogue[],        
        introduction_played:boolean = false
    ){
        this.name = name
        this.id = id
        this.shop = has_shop
        this.quests = quests
        this.dialogue = dialogue
        this.introduction_played=introduction_played
    }
}


