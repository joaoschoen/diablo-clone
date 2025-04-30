
export class Quest {
    name: string
    id: string
    initiation: Array<boolean> = [false, false, false]
    after_initiation: Array<boolean> = [false, false, false]
    early_return: Array<boolean> = [false, false, false]
    upon_completion: Array<boolean> = [false, false, false]
    complete: Array<boolean> = [false, false, false]

    constructor(
        name: string,
        id: string,
    ) {
        this.name = name
        this.id = id
    }

    loadPlayerSave(
        initiation?: Array<boolean>,
        after_initiation?: Array<boolean>,
        early_return?: Array<boolean>,
        upon_completion?: Array<boolean>,
        complete?: Array<boolean>,
    ) {
        if (initiation !== undefined) {
            this.initiation = initiation
        }
        if (after_initiation !== undefined) {
            this.after_initiation = after_initiation
        }
        if (early_return !== undefined) {
            this.early_return = early_return
        }
        if (upon_completion !== undefined) {
            this.upon_completion = upon_completion
        }
        if (complete !== undefined) {
            this.complete = complete
        }
    }

    cloneQuest(): Quest {
        let quest = new Quest(this.name, this.id)
        quest.loadPlayerSave(
            this.initiation,
            this.after_initiation,
            this.early_return,
            this.upon_completion,
            this.complete,
        )
        return quest
    }
}

export enum QUEST_STAGE_ENUM {
    INITIATION = "initiation",
    AFTER_INITIATION = "after_initiation",
    EARLY_RETURN = "early_return",
    UPON_COMPLETION = "upon_completion",
    COMPLETE = "complete",
}
// https://classic.battle.net/diablo2exp/quests/rewards.shtml