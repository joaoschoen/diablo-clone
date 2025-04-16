export class Area{
    id: string
    name: string
    area_level: AreaLevel
    has_waypoint: boolean
    exits: string[]

    constructor(
        id: string,
        name: string,
        area_level: AreaLevel,
        has_waypoint: boolean,
        exits: string[],
    ){
        this.id = id
        this.name = name
        this.area_level = area_level
        this.has_waypoint = has_waypoint
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