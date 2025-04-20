import { ItemQuality } from "../../../shared/enum/item-quality.enum";
import { ItemType } from "../../../shared/enum/item-type.enum";
import { Terminology } from "../../../shared/enum/terminology.enum";
import { Effect } from "../../effects";
import { Vector2D } from "../../geometry";
import { Entity } from "../../player/player";
import { Consumable, CONSUMABLE_TARGET_TYPE } from "../consumable";
import { Item } from "../item";

const POTION_IMAGE = "items/Minorhealing.webp"
// POTIONS
export class Potion extends Item implements Consumable {
    public charges: number;
    public target: CONSUMABLE_TARGET_TYPE = "entity";
    public effect: Effect;

    constructor(
        name: string,
        effect: Effect,
    ) {
        super(name,
            POTION_IMAGE,
            new Vector2D(1, 1),
            ["inv", "quick_bar"],
            ItemType.Potion,
            ItemQuality.Normal,
            Terminology.Potion)
        this.charges = 1
        this.effect = effect
    }

    public consume(target: Entity): boolean {
        if (this.charges <= 0) {
            return false;
        }

        // TODO: apply the effect on target here!
        this.charges--;
        return true;
    }
}