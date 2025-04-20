export enum Terminology {
    Armor = 'Armor',
    Heads = 'Heads',
    Weapon = 'Weapon',
    ComboWeapon = 'ComboWeapon',
    MissileWeapon = 'MissileWeapon',
    MeleeWeapon = 'MeleeWeapon',
    ThrowingWeapon = 'ThrowingWeapon',
    Spear = 'Spear',
    Rod = 'Rod',
    BluntWeapon = 'BluntWeapon',
    Potion = 'Potion',
    Scroll = 'Scroll',
    Tome = 'Tome'
};

export const TerminologyDescription: Record<Terminology, string> = {
    [Terminology.Armor]: 'Includes Body Armor, Boots, Gloves, Belts, Helms, Barbarian Helms, Druid Pelts, Circlets, Shields, Paladin Shields, and Necromancer Shrunken Heads.',
    [Terminology.Heads]: 'Refers specifically to Necromancer Shrunken Heads.',
    [Terminology.Weapon]: 'Covers Missile Weapons, Melee Weapons, and Throwing Weapons.',
    [Terminology.ComboWeapon]: 'Combination of Melee Weapons and Throwing Weapons.',
    [Terminology.MissileWeapon]: 'Includes Amazon Bows, Bows, Crossbows, and Amazon Javelins.',
    [Terminology.MeleeWeapon]: 'Includes Amazon Spears, Javelins, Wands, Staves, Maces, Swords, Daggers, Assassin Katars, Sorceress Orbs, Axes, Spears, and Polearms.',
    [Terminology.ThrowingWeapon]: 'Includes Throwing Knives, Throwing Axes, and Javelins.',
    [Terminology.Spear]: 'Refers to both Javelins and Spears.',
    [Terminology.Rod]: 'Includes Scepters, Wands, and Staves.',
    [Terminology.BluntWeapon]: 'Covers Maces, Scepters, Staves, and Wands.',
    [Terminology.Potion]: 'Items that increase Life, Mana, Stamina, provide resistances or can be thrown at monsters.',
    [Terminology.Scroll]: 'Consumable magical parchments, like Scrolls of Identify and Town Portal.',
    [Terminology.Tome]: 'Books that store multiple scrolls, like Tome of Identify and Tome of Town Portal.'
};
