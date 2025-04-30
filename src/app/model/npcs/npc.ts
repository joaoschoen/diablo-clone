import { Trigger } from "@model/trigger"
import { Quest } from "../quest/quest"
import { Shop } from "../shop/shop"
import { Dialogue } from "./dialogue"

export class NPC {
    name: string
    id: string
    shop: Shop
    quests: Quest[]
    dialogue: Dialogue[]
    introduction_played: boolean = false
    activeTrigger: Trigger | undefined = undefined

    constructor(
        name: string,
        id: string,
        has_shop: Shop,
        quests: Quest[],
        dialogue: Dialogue[],
        introduction_played: boolean = false,
        activeTrigger: Trigger | undefined = undefined
    ) {
        this.name = name
        this.id = id
        this.shop = has_shop
        this.quests = quests
        this.dialogue = dialogue
        this.introduction_played = introduction_played
        this.activeTrigger = activeTrigger
    }

    loadPlayerSave(introduction_played: boolean) {
        this.introduction_played = introduction_played
    }
}


