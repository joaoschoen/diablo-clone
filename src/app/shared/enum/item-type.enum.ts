export enum ItemType {
    Gem = 'Gem',
    Rune = 'Rune',
    Charm = 'Charm',
    Jewel = 'Jewel',
    Scroll = 'Scroll',
    Tome = 'Tome',
    Arrow = 'Arrow',
    Bolt = 'Bolt',
    Potion = 'Potion',
    Key = 'Key',
    QuestItem = 'QuestItem'
};

export const ItemTypeDescription: Record<ItemType, string> = {
    [ItemType.Gem]: 'Precious stones that provide bonuses when socketed into weapons or armor.',
    [ItemType.Rune]: 'Powerful stones that can form runewords when inserted into socketed items.',
    [ItemType.Charm]: 'Items that grant bonuses when kept in inventory.',
    [ItemType.Jewel]: 'Magical items that can be socketed into weapons, armor, or helms.',
    [ItemType.Scroll]: 'Consumables used to identify items or open town portals.',
    [ItemType.Tome]: 'Containers that store multiple scrolls.',
    [ItemType.Arrow]: 'Ammunition for bows.',
    [ItemType.Bolt]: 'Ammunition for crossbows.',
    [ItemType.Potion]: 'Consumables that restore Life, Mana, Stamina, or provide resistances.',
    [ItemType.Key]: 'Used to open locked chests.',
    [ItemType.QuestItem]: 'Special items required for completing quests.'
};
