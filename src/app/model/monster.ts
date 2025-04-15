import { GameController } from "./game-controller"
import { Resistances } from "./player/player"

export class Monster {
    name: string
    level: number
    exp: number
    hp: number
    modifier: MonsterModifier
    resistances: Resistances
    constructor(
        name: string,
        level: number,
        exp: number,
        hp: number,
        modifier: MonsterModifier,
        resistances: Resistances,
    ) {
        this.name = name
        this.level = level
        this.exp = exp
        this.hp = hp
        this.modifier = modifier
        this.resistances = resistances
    }

    death(controller: GameController){
        let expToGive = this.exp
        expToGive *= this.modifier.exp_multiplier
        controller.character.addExp(expToGive)
    }
}

class MonsterModifier{
    exp_multiplier: number
    mlvl_bonus: number

    constructor(
        exp_multiplier: number,
        mlvl_bonus: number,
    ){
        this.exp_multiplier = exp_multiplier
        this.mlvl_bonus = mlvl_bonus
    }
}

class Normal extends MonsterModifier{
    constructor(){
        super(1,1)
    }
}

class Champion extends MonsterModifier{
    constructor(){
        super(3,2)
    }
}

class Minion extends MonsterModifier{
    constructor(){
        super(5,3)
    }
}

class BerserkChampion extends MonsterModifier{
    constructor(){
        super(5,3)
    }
}

class Unique extends MonsterModifier{
    constructor(){
        super(5,3)
    }
}

class Boss extends MonsterModifier{
    constructor(){
        super(1,1)
    }
}
