import { effect } from "@angular/core"
import { Class } from "./classes/class"
import { attrPointsFromLvl, calcCharacterLevel, LevelEXP, skillPointsFromLvl } from "./level"
import { Mercenary } from "./mercenary"
import { Quests } from "./quests"
import { Effect } from "../effects"
import { WaypointList } from "./waypoint"

export class Character {
    name: string
    exp: number = 0
    lvl: LevelEXP
    nextLvl: LevelEXP
    class: Class
    attributes: Attributes
    distributedAttributes: Attributes
    levelAttributeBonus: Attributes
    gearAttributeBonus: Attributes
    freeAttributePoints: number
    freeSkillPoints: number
    resistances: Resistances
    mercenary: Mercenary
    quests: Quests
    waypoints: WaypointList

    constructor(
        name: string,
        char_class: Class,
        distributedAttributes: Attributes,
        gearAttributeBonus: Attributes,
        mercenary: Mercenary,
        quests: Quests,
        waypoints: WaypointList,
    ){
        this.name = name
        let lvl = calcCharacterLevel(this.exp,
             false)
        this.lvl = lvl[0]
        this.nextLvl = lvl[1]
        this.class = char_class
        this.attributes = char_class.startingAttributes
        this.distributedAttributes = distributedAttributes
        this.levelAttributeBonus = this.calcLevelAttributeBonus()
        this.gearAttributeBonus = gearAttributeBonus
        this.resistances = new Resistances(0, 0, 0, 0, 0, 0)
        this.mercenary = mercenary
        this.quests = quests
        this.waypoints = waypoints
        this.freeAttributePoints = this.calcFreeAttributePoints()
        this.freeSkillPoints = this.calcFreeAttributePoints()
    }

    addExp(expToAdd: number) {
        this.exp += expToAdd
        if (this.mercenary != undefined) {
            this.mercenary.addExp(this.exp, expToAdd)
        }
        if (this.exp > this.nextLvl.exp) {
            this.levelUp()
        }
    }

    levelUp() {
        let lvl = calcCharacterLevel(this.exp, false)
        this.lvl = lvl[0]
        this.nextLvl = lvl[1]
        this.freeAttributePoints += 5
        this.freeSkillPoints += 1
        this.levelAttributeBonus = this.calcLevelAttributeBonus()
    }

    calcFreeAttributePoints(){
        let pointsFromLevels = attrPointsFromLvl(this.lvl.lvl)
        let pointsFromQuests = this.quests.attrPointsFromQuests()
        let totalSpent = this.distributedAttributes.getTotalSpent()
        return (pointsFromLevels + pointsFromQuests) - totalSpent
    }

    calcFreeSkillPoints(){
        let pointsFromLevels = skillPointsFromLvl(this.lvl.lvl)
        let pointsFromQuests = this.quests.skillPointsFromQuests()
        let totalSpent = this.class.skills.calcTotalSpent()
        return (pointsFromLevels + pointsFromQuests) - totalSpent
    }

    calcLevelAttributeBonus():Attributes{
        let attr = new Attributes(0,0,0,0,0,0,0)
        let gain = this.class.statusGain
        attr.hp = this.lvl.lvl * gain.lvl_hp
        attr.mp = this.lvl.lvl * gain.lvl_mp
        attr.stamina = this.lvl.lvl * gain.lvl_stamina
        return attr
    }
}
export type Attribute = 
    | "strength"
    | "dexterity"
    | "vitality"
    | "energy"
    | "hp"
    | "stamina"
    | "mp"
    | "fire"
    | "cold"
    | "lightning"
    | "poison"
    | "magic_find"
    | "gold_find"
    | "mana_per_kill"
    | "faster_cast_rate"
    | "increased_attack_speed"
    | "life_stolen_per_hit"
    | "mana_stolen_per_hit"

export class Attributes {
    strength: number
    dexterity: number
    vitality: number
    energy: number
    hp: number
    stamina: number
    mp: number

    constructor(
        strength: number,
        dexterity: number,
        vitality: number,
        energy: number,
        hp: number,
        stamina: number,
        mp: number,
    ) {
        this.strength = strength
        this.dexterity = dexterity
        this.vitality = vitality
        this.energy = energy
        this.hp = hp
        this.stamina = stamina
        this.mp = mp
    }
  
    getTotalSpent() {
        return this.strength + this.dexterity + this.vitality + this.energy
    }
}

export class StatusGained {
    lvl_hp: number
    lvl_mp: number
    lvl_stamina: number
    vit_hp: number
    ene_mp: number
    vit_stamina: number

    constructor(
        lvl_hp: number,
        lvl_mp: number,
        lvl_stamina: number,
        vit_hp: number,
        ene_mp: number,
        vit_stamina: number,
    ) {
        this.lvl_hp = lvl_hp
        this.lvl_mp = lvl_mp
        this.lvl_stamina = lvl_stamina
        this.vit_hp = vit_hp
        this.ene_mp = ene_mp
        this.vit_stamina = vit_stamina
    }
}

export class Resistances {
    fire: number
    cold: number
    lightning: number
    poison: number
    magic: number
    physical: number

    constructor(
        fire: number,
        cold: number,
        lightning: number,
        poison: number,
        magic: number,
        physical: number
    ) {
        this.fire = fire
        this.cold = cold
        this.lightning = lightning
        this.poison = poison
        this.magic = magic
        this.physical = physical
    }
}

export class Entity{
    effects: Effect[] = []

    constructor(){}

    addEffect(newEffect: Effect){
        let effectIndex = this.effects.findIndex(effect => effect.name = newEffect.name)
        if(effectIndex != -1){
            if(newEffect.amount_additive){
                this.effects[effectIndex].amount += newEffect.amount
            } else 
            if(newEffect.duration_set) {
                this.effects[effectIndex].amount = newEffect.amount
            }
            if(newEffect.duration_additive){
                this.effects[effectIndex].duration += newEffect.duration
            }
        }
    }
}
