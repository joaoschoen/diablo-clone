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
export class HandAxe extends Axes {
    constructor() {
        super(
            'Hand Axe',
            "items/Weapons/Axe/01_Hand_Axe.bmp",
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
        )
    }
}

export class Axe extends Axes {
    constructor() {
        super(
            'Axe',
            "items/Weapons/Axe/02_Axe.bmp",
            new Vector2D(2, 3),
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
        )
    }
}

export class DoubleAxe extends Axes {
    constructor() {
        super(
            'Double Axe',
            "items/Weapons/Axe/03_Double_Axe.bmp",
            new Vector2D(2, 3),
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
        )
    }
}

export class MilitaryPick extends Axes {
    constructor() {
        super(
            'Military Pick',
            "items/Weapons/Axe/04_Military_Pick.bmp",
            new Vector2D(2, 3),
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
        )
    }
}

export class WarAxe extends Axes {
    constructor() {
        super(
            'War Axe',
            "items/Weapons/Axe/05_War_Axe.bmp",
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
        )
    }
}

export class LargeAxe extends Axes {
    constructor() {
        super(
            'Large Axe',
            "items/Weapons/Axe/06_Large_Axe.bmp",
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
        )
    }
}

export class BroadAxe extends Axes {
    constructor() {
        super(
            'Broad Axe',
            "items/Weapons/Axe/07_Broad_Axe.bmp",
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
        )
    }
}

export class BattleAxe extends Axes {
    constructor() {
        super(
            'Battle Axe',
            "items/Weapons/Axe/08_Battle_Axe.bmp",
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
        )
    }
}

export class GreatAxe extends Axes {
    constructor() {
        super(
            'Great Axe',
            "items/Weapons/Axe/09_Great_Axe.bmp",
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
        )
    }
}

export class GiantAxe extends Axes {
    constructor() {
        super(
            'Giant Axe',
            "items/Weapons/Axe/10_Giant_Axe.bmp",
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
        )
    }
}
