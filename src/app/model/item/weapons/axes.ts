import { ItemQuality } from "../../../shared/enum/item-quality.enum";
import { ItemType } from "../../../shared/enum/item-type.enum";
import { Terminology } from "../../../shared/enum/terminology.enum";
import { Attributes } from "../../../shared/types/attributes.type";
import { Slot } from "../../../shared/types/slot.type";
import { Equipment } from "../item";

export class Axes extends Equipment {
    public attributes: Attributes;
    public isTwoHanded: boolean;

    public constructor(name: string, size: number[], slots: Slot[], type: ItemType, quality: ItemQuality,
        terminology: Terminology, level: number, isIdentified: boolean, isTwoHanded: boolean, attributes: Attributes) {
        super(name, size, slots, type, quality, terminology, level, isIdentified);
        this.attributes = attributes;
        this.isTwoHanded = isTwoHanded;
    }
}

// NORMAL - ONE HANDED AXES
export const handAxe = new Axes('Hand Axe', [1, 3], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 1, true, false,
    {
        minDamage: 3,
        maxDamage: 6,
        meleeRange: 1,
        attackSpeed: [0],
        durability: 28,
        maxSockets: 2,
        qualityLevel: 3
    }
);

export const axe = new Axes('Axe', [1, 3], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 1, true, false,
    {
        minDamage: 4,
        maxDamage: 11,
        meleeRange: 2,
        attackSpeed: [10],
        minimumStrength: 32,
        durability: 24,
        maxSockets: 4,
        qualityLevel: 7
    }
);

export const doubleAxe = new Axes('Double Axe', [2, 2], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 1, true, false,
    {
        minDamage: 5,
        maxDamage: 13,
        meleeRange: 2,
        attackSpeed: [10],
        minimumStrength: 43,
        durability: 24,
        maxSockets: 5,
        qualityLevel: 13
    }
);

export const militaryPick = new Axes('Military Pick', [1, 3], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 1, true, false,
    {
        minDamage: 7,
        maxDamage: 11,
        meleeRange: 2,
        attackSpeed: [-10],
        minimumStrength: 49,
        minimumDexterity: 33,
        durability: 26,
        maxSockets: 6,
        qualityLevel: 19
    }
);

export const warAxe = new Axes('War Axe', [2, 3], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 1, true, false,
    {
        minDamage: 10,
        maxDamage: 18,
        meleeRange: 3,
        attackSpeed: [0],
        minimumStrength: 67,
        durability: 26,
        maxSockets: 6,
        qualityLevel: 25
    }
);

// NORMAL - TWO HANDED AXES
export const largeAxe = new Axes('Large Axe', [2, 4], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 2, true, true,
    {
        minDamage: 6,
        maxDamage: 13,
        meleeRange: 2,
        attackSpeed: [-10],
        minimumStrength: 35,
        durability: 30,
        maxSockets: 4,
        qualityLevel: 6
    }
);

export const broadAxe = new Axes('Broad Axe', [2, 3], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 2, true, true,
    {
        minDamage: 10,
        maxDamage: 18,
        meleeRange: 2,
        attackSpeed: [0],
        minimumStrength: 48,
        durability: 35,
        maxSockets: 5,
        qualityLevel: 12
    }
);

export const battleAxe = new Axes('Battle Axe', [2, 4], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 2, true, true,
    {
        minDamage: 12,
        maxDamage: 32,
        meleeRange: 2,
        attackSpeed: [10],
        minimumStrength: 54,
        durability: 40,
        maxSockets: 5,
        qualityLevel: 17
    }
);

export const greatAxe = new Axes('Great Axe', [2, 4], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 2, true, true,
    {
        minDamage: 9,
        maxDamage: 30,
        meleeRange: 1,
        attackSpeed: [-10],
        minimumStrength: 63,
        minimumDexterity: 39,
        durability: 50,
        maxSockets: 6,
        qualityLevel: 23
    }
);

export const giantAxe = new Axes('Giant Axe', [2, 4], [], ItemType.Axe, ItemQuality.Normal, Terminology.MeleeWeapon, 2, true, true,
    {
        minDamage: 22,
        maxDamage: 45,
        meleeRange: 4,
        attackSpeed: [10],
        minimumStrength: 70,
        durability: 50,
        maxSockets: 6,
        qualityLevel: 27
    }
);
