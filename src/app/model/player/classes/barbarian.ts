import { BARBARIAN_DEFINITION } from "../../constants"
import { Attributes, StatusGained } from "../player"
import { Skill, Skills, SkillTree } from "../skills"
import { Class } from "./class"

export class Barbarian extends Class {
    public constructor() {
        let att = new Attributes(20, 25, 20, 15, 50, 84, 15)
        let gain = new StatusGained(2, 1.5, 1, 3, 1.5, 1)
        super("Barbarian", "./assets/classes/Barbarian.webp", BARBARIAN_DEFINITION, att, gain, new BarbarianSkills())
    }
}

class BarbarianSkills extends Skills {
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