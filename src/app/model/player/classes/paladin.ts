import { Attributes, StatusGained } from "../player"
import { Skill, Skills, SkillTree } from "../skills"
import { Class } from "./class"

export class Paladin extends Class {
    constructor() {
        let att = new Attributes(25, 20, 25, 15, 55, 89, 15)
        let gain = new StatusGained(2, 1.5, 1, 3, 1.5, 1)
        super(att, gain, new PaladinSkills())
    }
}

class PaladinSkills extends Skills{
    constructor(){
        let Skills1: Skill[] = []
        let Tree1 = new SkillTree("",Skills1)

        let Skills2: Skill[] = []
        let Tree2 = new SkillTree("",Skills2)

        let Skills3: Skill[] = []
        let Tree3 = new SkillTree("",Skills3)

        super(
            Tree1,Tree2,Tree3
        )
    }
}