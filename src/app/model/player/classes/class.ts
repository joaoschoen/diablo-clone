import { Attributes, StatusGained } from "../player"
import { Skills } from "../skills"

export class Class {
    startingAttributes: Attributes
    statusGain: StatusGained
    skills: Skills

    constructor(att: Attributes, gain: StatusGained,skills: Skills) {
        this.startingAttributes = att
        this.statusGain = gain
        this.skills = skills
    }
}
