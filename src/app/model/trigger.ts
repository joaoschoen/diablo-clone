import { QuestStage } from "./player/quests"

export class QuestTrigger {
    act_id: string
    npc_id: string
    target_id: string
    stage: QuestStage
    constructor(
        act_id: string,
        npc_id: string,
        target_id: string,
        stage: QuestStage,
    ) {
        this.act_id = act_id
        this.npc_id = npc_id
        this.target_id = target_id
        this.stage = stage
    }
}

export class DialogueTrigger {
    act_id: string
    npc_id: string
    target_id: string
    constructor(
        act_id: string,
        npc_id: string,
        target_id: string,
    ) {
        this.act_id = act_id
        this.npc_id = npc_id
        this.target_id = target_id
    }
}

