import { DEN_OF_EVIL_QUEST_ID, DenOfEvil } from "@model/quest/act1/den_of_evil";
import { Quest, QUEST_STAGE_ENUM } from "@model/quest/quest";
import { Shop } from "@model/shop/shop";
import { DialogueTrigger, QuestTrigger } from "@model/trigger";
import { ACT_ENUM } from "@shared/enum/act.enum";
import { Dialogue } from "../dialogue";
import { NPC } from "../npc";

const AkaraId: string = "akara"
const AkaraShop: Shop = new Shop(false)

const AkaraQuests: Quest[] = [
    new DenOfEvil()
]

const AkaraIntroductionTrigger: QuestTrigger = {
    act_id: ACT_ENUM.ACT1,
    npc_id: AkaraId,
    target_id: DEN_OF_EVIL_QUEST_ID,
    stage: QUEST_STAGE_ENUM.INITIATION,
}

const DenOfEvilInitiationTrigger: DialogueTrigger = {
    act_id: ACT_ENUM.ACT1,
    npc_id: AkaraId,
    target_id: DEN_OF_EVIL_QUEST_ID,
}

const DenOfEvilAfterInitializationTrigger: QuestTrigger = {
    act_id: ACT_ENUM.ACT1,
    npc_id: AkaraId,
    target_id: DEN_OF_EVIL_QUEST_ID,
    stage: QUEST_STAGE_ENUM.AFTER_INITIATION,
}

const AkaraDialogue: Dialogue[] = [
    { name: "Introduction", text: "I am Akara", unlocked: true, trigger: [AkaraIntroductionTrigger, DenOfEvilInitiationTrigger] },
    { name: DenOfEvil.name, text: "There is a place of great evil", unlocked: false, trigger: [DenOfEvilAfterInitializationTrigger] }
]

export const Akara: NPC = new NPC("Akara", AkaraId, AkaraShop, AkaraQuests, AkaraDialogue, false, AkaraIntroductionTrigger)