export class Quests{
    act1: Act
    act2: Act
    act3: Act
    act4: Act
    act5: Act

    constructor(
        act1: Act,
        act2: Act,
        act3: Act,
        act4: Act,
        act5: Act,
    ){

        this.act1 = act1
        this.act2 = act2
        this.act3 = act3
        this.act4 = act4
        this.act5 = act5
    }

    attrPointsFromQuests(){
        let points = 0
        if(this.act3.quest4.normal){
            points += 5
        }
        if(this.act3.quest4.nightmare){
            points += 5
        }
        if(this.act3.quest4.hell){
            points += 5
        }
        return points
    }

    skillPointsFromQuests(){
        let points = 0
        if(this.act1.quest1.normal){
            points += 1
        }
        if(this.act1.quest1.nightmare){
            points += 1
        }
        if(this.act1.quest1.hell){
            points += 1
        }
        if(this.act2.quest1.normal){
            points += 1
        }
        if(this.act2.quest1.nightmare){
            points += 1
        }
        if(this.act2.quest1.hell){
            points += 1
        }
        if(this.act4.quest1.normal){
            points += 2
        }
        if(this.act4.quest1.nightmare){
            points += 2
        }
        if(this.act4.quest1.hell){
            points += 2
        }
        return points
    }
}

class Act{
    quest1: QuestCompletion
    quest2: QuestCompletion
    quest3: QuestCompletion
    quest4: QuestCompletion
    quest5: QuestCompletion
    quest6: QuestCompletion

    constructor(
        quest1: QuestCompletion,
        quest2: QuestCompletion,
        quest3: QuestCompletion,
        quest4: QuestCompletion,
        quest5: QuestCompletion,
        quest6: QuestCompletion,
    ){
        this.quest1 = quest1
        this.quest2 = quest2
        this.quest3 = quest3
        this.quest4 = quest4
        this.quest5 = quest5
        this.quest6 = quest6
    }
}

class QuestCompletion{
    normal: boolean
    nightmare: boolean
    hell: boolean

    constructor(normal: boolean,nightmare: boolean,hell: boolean){
        this.normal = normal
        this.nightmare = nightmare
        this.hell = hell
    }
}