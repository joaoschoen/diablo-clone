import { Attributes, StatusGained } from "../player";
import { Skills } from "../skills";

export class Class {
    public className: string;
    public classImage: string;
    public startingAttributes: Attributes;
    public statusGain: StatusGained;
    public skills: Skills;

    public constructor(className: string, classImage: string, att: Attributes, gain: StatusGained, skills: Skills) {
        this.className = className;
        this.classImage = classImage;
        this.startingAttributes = att;
        this.statusGain = gain;
        this.skills = skills;
    }
}
