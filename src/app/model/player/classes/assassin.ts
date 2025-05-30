import { ASSASSIN_DEFINITION } from "../../constants"
import { Attributes, StatusGained } from "../player"
import { Skill, Skills, SkillTree } from "../skills"
import { Class } from "./class"

export class Assassin extends Class {
    public constructor() {
        let att = new Attributes(20, 20, 20, 25, 50, 95, 25)
        let gain = new StatusGained(2, 1.5, 1.25, 3, 1.75, 1.25)
        super("Assassin", "./assets/classes/Assassin.webp", ASSASSIN_DEFINITION, att, gain, new AssassinSkills())
    }
}

class AssassinSkills extends Skills{
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