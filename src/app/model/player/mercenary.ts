import { calcCharacterLevel, LevelEXP } from "./level"
import { Resistances } from "./player"

export class Mercenary {
    name: string
    exp: number = 0
    lvl: LevelEXP
    nextLvl: LevelEXP
    resistances: Resistances
    mercenaryClass: MercenaryClass
    constructor(
        name: string,
        mercenaryClass: MercenaryClass
    ) {
        this.name = name
        let lvl = calcCharacterLevel(this.exp,true)
        this.lvl = lvl[0]
        this.nextLvl = lvl[1]
        this.mercenaryClass = mercenaryClass
        this.resistances = new Resistances(0, 0, 0, 0, 0, 0)
    }

    addExp(characterExp: number, valueToAdd:number){
        // Mercenaries can never level up past the character level
        this.exp += valueToAdd
        if (this.exp > characterExp){
            this.exp = characterExp
        }
        if(this.exp > this.nextLvl.exp){
            this.levelUp()
        }
    }

    levelUp(){
        let lvl = calcCharacterLevel(this.exp,true)
        this.lvl = lvl[0]
        this.nextLvl = lvl[1]
    }
}

export class MercenaryClass {
    startingAtt: MercenaryStatus
    statusGain: MercenaryStatusGained
    constructor(att: MercenaryStatus, gain: MercenaryStatusGained) {
        this.startingAtt = att
        this.statusGain = gain
    }
}

export class MercenaryStatusGained {
    lvl_hp: number
    lvl_strength: number
    lvl_dexterity: number
    lvl_defense: number
    lvl_resistances: number

    constructor(
        lvl_hp: number,
        lvl_strength: number,
        lvl_dexterity: number,
        lvl_defense: number,
        lvl_resistances: number,
    ) {
        this.lvl_hp = lvl_hp
        this.lvl_strength = lvl_strength
        this.lvl_dexterity = lvl_dexterity
        this.lvl_defense = lvl_defense
        this.lvl_resistances = lvl_resistances
    }
}


export class MercenaryStatus {
    strength: number
    dexterity: number
    life: number
    defense: number
    attack_rating: number
    initial_res: number

    constructor(
        strength: number,
        dexterity: number,
        life: number,
        defense: number,
        attack_rating: number,
        initial_res: number
    ) {
        this.strength = strength
        this.dexterity = dexterity
        this.life = life
        this.defense = defense
        this.attack_rating = attack_rating
        this.initial_res = initial_res
    }
}


export class Rogue extends MercenaryClass {
    constructor() {
        let att = new MercenaryStatus(32, 41, 40, 0, 0, 0)
        let gain = new MercenaryStatusGained(8, 1, 2, 6.5, 2)
        super(att, gain)
    }
}

export class DesertMercenary extends MercenaryClass {
    constructor() {
        let att = new MercenaryStatus(43, 28, 40, 0, 0, 2)
        let gain = new MercenaryStatusGained(10, 1.5, 1.5, 9.5, 2)
        super(att, gain)
    }
}

export class IronWolf extends MercenaryClass {
    constructor() {
        let att = new MercenaryStatus(31, 26, 40, 0, 0, 0)
        let gain = new MercenaryStatusGained(8, 1.5, 1.5, 6.1, 2.4)
        super(att, gain)
    }
}

export class BarbarianMercenary extends MercenaryClass {
    constructor() {
        let att = new MercenaryStatus(50, 29, 40, 0, 0, 8)
        let gain = new MercenaryStatusGained(12, 2, 1.5, 7.5, 1.5)
        super(att, gain)
    }
}