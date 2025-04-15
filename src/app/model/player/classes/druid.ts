import { Attributes, StatusGained } from "../player"
import { Skill, Skills, SkillTree } from "../skills"
import { Class } from "./class"

export class Druid extends Class {
    constructor() {
        let att = new Attributes(15, 20, 25, 20, 55, 84, 20)
        let gain = new StatusGained(1.5, 2, 1, 2, 2, 1)
        super(att, gain, new DruidSkills())
    }
}

class DruidSkills extends Skills{
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