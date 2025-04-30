export enum DIFFICULTY_ENUM {
    NORMAL = 0,
    NIGHTMARE = 1,
    HELL = 2,
}

export class Difficulty {
    normal: boolean
    nightmare: boolean
    hell: boolean

    constructor(
        normal: boolean = false,
        nightmare: boolean = false,
        hell: boolean = false
    ) {
        this.normal = normal
        this.nightmare = nightmare
        this.hell = hell
    }
}