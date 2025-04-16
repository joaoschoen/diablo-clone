import { SORCERESS_DEFINITION } from "../../constants"
import { Attributes, StatusGained } from "../player"
import { Skill, Skills, SkillTree } from "../skills"
import { Class } from "./class"

export class Sorcerer extends Class {
    public constructor() {
        let att = new Attributes(10, 25, 10, 35, 40, 74, 35)
        let gain = new StatusGained(1, 2, 1, 2, 2, 1)
        super("Sorcerer", "./assets/classes/Sorceress.webp", SORCERESS_DEFINITION, att, gain, new SorcererSkills())
    }
}

class SorcererSkills extends Skills {
    public constructor() {
        let Skills1: Skill[] = []
        let Tree1 = new SkillTree("", Skills1)

        let Skills2: Skill[] = []
        let Tree2 = new SkillTree("", Skills2)

        let Skills3: Skill[] = []
        let Tree3 = new SkillTree("", Skills3)

        super(
            Tree1, Tree2, Tree3
        )
    }
}