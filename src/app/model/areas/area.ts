export class Area{
    id: string
    name: string
    lvl: AreaLevel
    exits: string[]

    constructor(
        id: string,
        name: string,
        lvl: AreaLevel,
        exits: string[],
    ){
        this.id = id
        this.name = name
        this.lvl = lvl
        this.exits = exits
    }
}

export class AreaLevel{
    normal:number
    nightmare:number
    hell:number

    constructor(
        normal:number,
        nightmare:number,
        hell:number,
    ){
        this.normal = normal
        this.nightmare = nightmare
        this.hell = hell
    }
}