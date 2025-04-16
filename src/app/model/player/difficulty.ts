export enum DIFFICULTY_ENUM {
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