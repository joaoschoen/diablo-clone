import { Vector2D } from "@model/geometry";
import { WEAPON_WIELDING_ENUM } from "src/app/shared/enum/weapon.enum";
import { INV_SLOT_ENUM } from "src/app/shared/types/slot.type";
import { ItemQuality } from "../../../shared/enum/item-quality.enum";
import { ItemType } from "../../../shared/enum/item-type.enum";
import { Terminology } from "../../../shared/enum/terminology.enum";
import { WeaponAttributes } from "../../../shared/types/weapon_attributes.type";
import { Weapon } from "../weapon";

export class Axes extends Weapon {
    public constructor(
        name: string,
        image: string,
        size: Vector2D,
        slots: INV_SLOT_ENUM[],
        type: ItemType,
        quality: ItemQuality,
        terminology: Terminology,
        level: number,
        isIdentified: boolean,
        attributes: WeaponAttributes,
        wielding: WEAPON_WIELDING_ENUM
    ) {
        super(
            name,
            image,
            size,
            slots,
            type,
            quality,
            terminology,
            level,
            isIdentified,
            attributes,
            wielding,
        );
    }
}

// NORMAL - ONE HANDED AXES
export const handAxe = new Axes(
    'Hand Axe',
    "",
    new Vector2D(1, 3),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    1,
    true,
    {
        minDamage: 3,
        maxDamage: 6,
        meleeRange: 1,
        attackSpeed: [0],
        durability: 28,
        maxSockets: 2,
        qualityLevel: 3
    },
    WEAPON_WIELDING_ENUM.ONE_HANDED
);

export const axe = new Axes(
    'Axe',
    "",
    new Vector2D(1, 3),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    1,
    true,
    {
        minDamage: 4,
        maxDamage: 11,
        meleeRange: 2,
        attackSpeed: [10],
        minimumStrength: 32,
        durability: 24,
        maxSockets: 4,
        qualityLevel: 7
    },
    WEAPON_WIELDING_ENUM.ONE_HANDED
);

export const doubleAxe = new Axes(
    'Double Axe',
    "",
    new Vector2D(2, 2),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    1,
    true,
    {
        minDamage: 5,
        maxDamage: 13,
        meleeRange: 2,
        attackSpeed: [10],
        minimumStrength: 43,
        durability: 24,
        maxSockets: 5,
        qualityLevel: 13
    },
    WEAPON_WIELDING_ENUM.ONE_HANDED
);

export const militaryPick = new Axes(
    'Military Pick',
    "",
    new Vector2D(1, 3),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    1,
    true,
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
    },
    WEAPON_WIELDING_ENUM.ONE_HANDED
);

export const warAxe = new Axes(
    'War Axe',
    "",
    new Vector2D(2, 3),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    1,
    true,
    {
        minDamage: 10,
        maxDamage: 18,
        meleeRange: 3,
        attackSpeed: [0],
        minimumStrength: 67,
        durability: 26,
        maxSockets: 6,
        qualityLevel: 25
    },
    WEAPON_WIELDING_ENUM.ONE_HANDED
);

// NORMAL - TWO HANDED AXES
export const largeAxe = new Axes(
    'Large Axe',
    "",
    new Vector2D(2, 4),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    2,
    true,
    {
        minDamage: 6,
        maxDamage: 13,
        meleeRange: 2,
        attackSpeed: [-10],
        minimumStrength: 35,
        durability: 30,
        maxSockets: 4,
        qualityLevel: 6
    },
    WEAPON_WIELDING_ENUM.TWO_HANDED
);

export const broadAxe = new Axes(
    'Broad Axe',
    "",
    new Vector2D(2, 3),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    2,
    true,
    {
        minDamage: 10,
        maxDamage: 18,
        meleeRange: 2,
        attackSpeed: [0],
        minimumStrength: 48,
        durability: 35,
        maxSockets: 5,
        qualityLevel: 12
    },
    WEAPON_WIELDING_ENUM.TWO_HANDED
);

export const battleAxe = new Axes(
    'Battle Axe',
    "",
    new Vector2D(2, 4),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    2,
    true,
    {
        minDamage: 12,
        maxDamage: 32,
        meleeRange: 2,
        attackSpeed: [10],
        minimumStrength: 54,
        durability: 40,
        maxSockets: 5,
        qualityLevel: 17
    },
    WEAPON_WIELDING_ENUM.TWO_HANDED
);

export const greatAxe = new Axes(
    'Great Axe',
    "",
    new Vector2D(2, 4),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    2,
    true,
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
    },
    WEAPON_WIELDING_ENUM.TWO_HANDED
);

export const giantAxe = new Axes(
    'Giant Axe',
    "",
    new Vector2D(2, 4),
    [],
    ItemType.Axe,
    ItemQuality.Normal,
    Terminology.MeleeWeapon,
    2,
    true,
    {
        minDamage: 22,
        maxDamage: 45,
        meleeRange: 4,
        attackSpeed: [10],
        minimumStrength: 70,
        durability: 50,
        maxSockets: 6,
        qualityLevel: 27
    },
    WEAPON_WIELDING_ENUM.TWO_HANDED
);
