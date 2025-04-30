import { ACT_ENUM } from "@shared/enum/act.enum"
import { QUEST_STAGE_ENUM } from "./quest/quest"

export class Trigger {

}

export class QuestTrigger extends Trigger {
    act_id: ACT_ENUM
    npc_id: string
    target_id: string
    stage: QUEST_STAGE_ENUM
    constructor(
        act_id: ACT_ENUM,
        npc_id: string,
        target_id: string,
        stage: QUEST_STAGE_ENUM,
    ) {
        super()
        this.act_id = act_id
        this.npc_id = npc_id
        this.target_id = target_id
        this.stage = stage
    }
}

export class DialogueTrigger extends Trigger {
    act_id: ACT_ENUM
    npc_id: string
    target_id: string
    constructor(
        act_id: ACT_ENUM,
        npc_id: string,
        target_id: string,
    ) {
        super()
        this.act_id = act_id
        this.npc_id = npc_id
        this.target_id = target_id
    }
}

