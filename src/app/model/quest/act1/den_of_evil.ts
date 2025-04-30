import { Quest } from "../quest"

export const DEN_OF_EVIL_QUEST_ID: string = "den_of_evil"
export const DEN_OF_EVIL_QUEST_NAME = "Den of Evil"

export class DenOfEvil extends Quest {
    constructor() {
        super(DEN_OF_EVIL_QUEST_NAME, DEN_OF_EVIL_QUEST_ID)
    }
}