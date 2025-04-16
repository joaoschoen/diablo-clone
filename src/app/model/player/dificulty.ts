export type Act = "act1" | "act2" | "act3" | "act4" | "act5"

export enum ACT {
    ACT1 = "act1",
    ACT2 = "act2",
    ACT3 = "act3",
    ACT4 = "act4",
    ACT5 = "act5",
}

export type DifficultyType =
    | "normal"
    | "nightmare"
    | "hell"

export enum DIFFICULTY {
    NORMAL = "normal",
    NIGHTMARE = "nightmare",
    HELL = "hell",
}

export class Difficulty{
    normal: boolean
    nightmare: boolean
    hell: boolean
    
    constructor(
        normal: boolean = false,
        nightmare: boolean = false,
        hell: boolean = false
    ){
        this.normal = normal
        this.nightmare = nightmare
        this.hell = hell
    }
}