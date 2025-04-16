import { Difficulty } from "./dificulty"

export class Quests{
    act1: ActQuests
    act2: ActQuests
    act3: ActQuests
    act4: ActQuests
    act5: ActQuests

    constructor(
        act1: ActQuests,
        act2: ActQuests,
        act3: ActQuests,
        act4: ActQuests,
        act5: ActQuests,
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
        quest1: Quest,
        quest2: Quest,
        quest3: Quest,
        quest4: Quest,
        quest5: Quest,
        quest6: Quest,
    ){
        this.quest1 = quest1
        this.quest2 = quest2
        this.quest3 = quest3
        this.quest4 = quest4
        this.quest5 = quest5
        this.quest6 = quest6
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
        initiation: Difficulty,
        after_initiation: Difficulty,
        early_return: Difficulty,
        upon_completion: Difficulty,
        unlocked: Difficulty,
        complete: Difficulty,
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