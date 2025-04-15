export class Skills{
    Tree1: SkillTree
    Tree2: SkillTree
    Tree3: SkillTree
    
    constructor(
        Tree1: SkillTree,
        Tree2: SkillTree,
        Tree3: SkillTree,
    ){
        this.Tree1 = Tree1
        this.Tree2 = Tree2
        this.Tree3 = Tree3
    }

    calcTotalSpent(){
        let skillPoints = 0
        for (let i = 0; i < this.Tree1.skills.length; i++) {
            skillPoints += this.Tree1.skills[i].points
        }
        for (let i = 0; i < this.Tree2.skills.length; i++) {
            skillPoints += this.Tree2.skills[i].points
        }
        for (let i = 0; i < this.Tree3.skills.length; i++) {
            skillPoints += this.Tree3.skills[i].points
        }
        return skillPoints
    }
}

export class SkillTree{
    name: string
    skills: Skill[]
    
    constructor(
        name: string,
        skills: Skill[],
    ){
        this.name = name
        this.skills = skills
    }
}

export class Skill{
    name: string
    levelRequirement: number
    points: number

    constructor(
        name: string,
        levelRequirement: number,
        points: number,
    ){
        this.name = name
        this.levelRequirement = levelRequirement
        this.points = points
    }
}