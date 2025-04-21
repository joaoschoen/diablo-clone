export enum ItemQuality {
    LowQuality = 'LowQuality',
    Normal = 'Normal',
    Superior = 'Superior',
    Magic = 'Magic',
    Rare = 'Rare',
    Set = 'Set',
    Unique = 'Unique',
    Crafted = 'Crafted'
};

export const ItemQualityDescription: Record<ItemQuality, string> = {
    [ItemQuality.LowQuality]: 'Reduced defense or damage, lower durability.',
    [ItemQuality.Normal]: 'Standard item with no modifications.',
    [ItemQuality.Superior]: 'Improved stats compared to normal items.',
    [ItemQuality.Magic]: 'Random magical properties.',
    [ItemQuality.Rare]: 'More magical properties than Magic items.',
    [ItemQuality.Set]: 'Part of a powerful set with combined bonuses.',
    [ItemQuality.Unique]: 'One-of-a-kind items with fixed properties.',
    [ItemQuality.Crafted]: 'Custom-made items using special recipes.'
};
