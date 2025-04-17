import { NECROMANCER_DEFINITION } from "../../constants"
import { Attributes, StatusGained } from "../player"
import { Skill, Skills, SkillTree } from "../skills"
import { Class } from "./class"

export class Necromancer extends Class {
    public constructor() {
        let att = new Attributes(15, 25, 15, 25, 45, 79, 25)
        let gain = new StatusGained(1.5, 2, 1, 2, 2, 1)
        super("Necromancer", "./assets/classes/Necromancer.webp", NECROMANCER_DEFINITION, att, gain, new NecromancerSkills())
    }
}

class NecromancerSkills extends Skills{
    public constructor(){
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