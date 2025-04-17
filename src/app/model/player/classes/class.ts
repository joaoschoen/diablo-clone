import { Attributes, StatusGained } from "../player";
import { Skills } from "../skills";

export class Class {
    public className: string;
    public classImage: string;
    public definition: string;
    public startingAttributes: Attributes;
    public statusGain: StatusGained;
    public skills: Skills;

    public constructor(className: string, classImage: string, definition: string, att: Attributes, gain: StatusGained, skills: Skills) {
        this.className = className;
        this.classImage = classImage;
        this.definition = definition;
        this.startingAttributes = att;
        this.statusGain = gain;
        this.skills = skills;
    }
}
