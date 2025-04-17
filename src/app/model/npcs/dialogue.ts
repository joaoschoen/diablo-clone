import { DialogueTrigger, QuestTrigger } from "../trigger"

export class Dialogue{
    name:string
    text:string
    unlocked: boolean
    trigger: Array<QuestTrigger|DialogueTrigger>

    constructor(
        name:string,
        text:string,
        unlocked:boolean,
        trigger: Array<QuestTrigger|DialogueTrigger>
    ){
        this.name = name
        this.text = text
        this.unlocked = unlocked
        this.trigger = trigger
    }
}


// https://diablo2.io/forums/npc-s-dialogues-t3499.html