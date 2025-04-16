import { DenOfEvil } from "../npcs/act1/akara/akara"
import { Difficulty } from "./difficulty"

export class Quests{
    act1: ActQuests
    act2: ActQuests
    act3: ActQuests
    act4: ActQuests
    act5: ActQuests

    constructor(
        act1: ActQuests = new ActQuests(),
        act2: ActQuests = new ActQuests(),
        act3: ActQuests = new ActQuests(),
        act4: ActQuests = new ActQuests(),
        act5: ActQuests = new ActQuests(),
    ){

        this.act1 = act1
        this.act2 = act2
        this.act3 = act3
        this.act4 = act4
        this.act5 = act5
    }

    attrPointsFromQuests(){
        let points = 0
        if(this.act3.quest4.complete.normal){
            points += 5
        }
        if(this.act3.quest4.complete.nightmare){
            points += 5
        }
        if(this.act3.quest4.complete.hell){
            points += 5
        }
        return points
    }

    skillPointsFromQuests(){
        let points = 0
        if(this.act1.quest1.complete.normal){
            points += 1
        }
        if(this.act1.quest1.complete.nightmare){
            points += 1
        }
        if(this.act1.quest1.complete.hell){
            points += 1
        }
        if(this.act2.quest1.complete.normal){
            points += 1
        }
        if(this.act2.quest1.complete.nightmare){
            points += 1
        }
        if(this.act2.quest1.complete.hell){
            points += 1
        }
        if(this.act4.quest1.complete.normal){
            points += 2
        }
        if(this.act4.quest1.complete.nightmare){
            points += 2
        }
        if(this.act4.quest1.complete.hell){
            points += 2
        }
        return points
    }
}

class ActQuests{
    quest1: Quest
    quest2: Quest
    quest3: Quest
    quest4: Quest
    quest5: Quest
    quest6: Quest

    constructor(
        // quest1: Quest|undefined,
        // quest2: Quest|undefined,
        // quest3: Quest|undefined,
        // quest4: Quest|undefined,
        // quest5: Quest|undefined,
        // quest6: Quest|undefined,
    ){
        this.quest1 = DenOfEvil
        this.quest2 = DenOfEvil
        this.quest3 = DenOfEvil
        this.quest4 = DenOfEvil
        this.quest5 = DenOfEvil
        this.quest6 = DenOfEvil
    }
}

export class Quest{
    name:string
    id:string
    initiation: Difficulty
    after_initiation: Difficulty
    early_return: Difficulty
    upon_completion: Difficulty
    unlocked: Difficulty
    complete: Difficulty

    constructor(
        name:string,
        id:string,
        initiation: Difficulty = new Difficulty(),
        after_initiation: Difficulty = new Difficulty(),
        early_return: Difficulty = new Difficulty(),
        upon_completion: Difficulty = new Difficulty(),
        unlocked: Difficulty = new Difficulty(),
        complete: Difficulty = new Difficulty(),
    ){
        this.name = name
        this.id = id
        this.initiation = initiation
        this.after_initiation = after_initiation
        this.early_return = early_return
        this.upon_completion = upon_completion
        this.unlocked = unlocked
        this.complete = complete
    }
}

export type QuestStage = 
    |"initiation"
    |"after_initiation"
    |"early_return"
    |"upon_completion"

// https://classic.battle.net/diablo2exp/quests/rewards.shtml