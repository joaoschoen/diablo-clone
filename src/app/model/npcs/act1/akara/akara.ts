import { ACT_ENUM } from "../../../areas/act";
import { Difficulty } from "../../../player/difficulty";
import { Quest } from "../../../player/quests";
import { Shop } from "../../../shop/shop";
import { DialogueTrigger, QuestTrigger } from "../../../trigger";
import { Dialogue } from "../../dialogue";
import { NPC } from "../../npc";

const AkaraId: string = "akara"
const AkaraShop: Shop = new Shop(false)

export const DenOfEvil: Quest = {
    name: "Den of Evil",
    id: "den_of_evil",
    initiation: new Difficulty(),
    after_initiation: new Difficulty(),
    early_return: new Difficulty(),
    upon_completion: new Difficulty(),
    complete: new Difficulty(),
    unlocked: new Difficulty(),
}

const AkaraQuests: Quest[] = [
    DenOfEvil
]

const AkaraIntroductionTrigger: QuestTrigger = {
    act_id: ACT_ENUM.ACT1,
    npc_id: AkaraId,
    target_id: DenOfEvil.id,
    stage: "initiation",
}

const DenOfEvilInitiationTrigger: DialogueTrigger = {
    act_id: ACT_ENUM.ACT1,
    npc_id: AkaraId,
    target_id: DenOfEvil.id,
}

const DenOfEvilAfterInitializationTrigger: QuestTrigger = {
    act_id: ACT_ENUM.ACT1,
    npc_id: AkaraId,
    target_id: DenOfEvil.id,
    stage:"after_initiation",
}

const AkaraDialogue: Dialogue[] = [
    { name: "Introduction", text: "I am Akara", unlocked: true, trigger: [AkaraIntroductionTrigger,DenOfEvilInitiationTrigger] },
    { name: DenOfEvil.name, text: "There is a place of great evil", unlocked: false, trigger: [DenOfEvilAfterInitializationTrigger] }
]

export const Akara: NPC = new NPC("Akara", AkaraId, AkaraShop, AkaraQuests, AkaraDialogue, false)