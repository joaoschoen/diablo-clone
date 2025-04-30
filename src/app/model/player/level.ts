export class LevelEXP {
    lvl: number
    exp: number

    constructor(lvl: number, exp: number) {
        this.lvl = lvl
        this.exp = exp
    }
}

const LEVEL_REQ_EXP: LevelEXP[] = [
    { lvl: 1, exp: 0 },
    { lvl: 2, exp: 500 },
    { lvl: 3, exp: 1500 },
    { lvl: 4, exp: 3750 },
    { lvl: 5, exp: 7875 },
    { lvl: 6, exp: 14175 },
    { lvl: 7, exp: 22680 },
    { lvl: 8, exp: 32886 },
    { lvl: 9, exp: 44396 },
    { lvl: 10, exp: 57715 },
    { lvl: 11, exp: 72144 },
    { lvl: 12, exp: 90180 },
    { lvl: 13, exp: 112725 },
    { lvl: 14, exp: 140906 },
    { lvl: 15, exp: 176132 },
    { lvl: 16, exp: 220165 },
    { lvl: 17, exp: 275207 },
    { lvl: 18, exp: 344008 },
    { lvl: 19, exp: 430010 },
    { lvl: 20, exp: 537513 },
    { lvl: 21, exp: 671891 },
    { lvl: 22, exp: 839864 },
    { lvl: 23, exp: 1049830 },
    { lvl: 24, exp: 1312287 },
    { lvl: 25, exp: 1640359 },
    { lvl: 26, exp: 2050449 },
    { lvl: 27, exp: 2563061 },
    { lvl: 28, exp: 3203826 },
    { lvl: 29, exp: 3902260 },
    { lvl: 30, exp: 4663553 },
    { lvl: 31, exp: 5493363 },
    { lvl: 32, exp: 6397855 },
    { lvl: 33, exp: 7383752 },
    { lvl: 34, exp: 8458379 },
    { lvl: 35, exp: 9629723 },
    { lvl: 36, exp: 10906488 },
    { lvl: 37, exp: 12298162 },
    { lvl: 38, exp: 13815086 },
    { lvl: 39, exp: 15468534 },
    { lvl: 40, exp: 17270791 },
    { lvl: 41, exp: 19235252 },
    { lvl: 42, exp: 21376515 },
    { lvl: 43, exp: 23710491 },
    { lvl: 44, exp: 26254525 },
    { lvl: 45, exp: 29027522 },
    { lvl: 46, exp: 32050088 },
    { lvl: 47, exp: 35344686 },
    { lvl: 48, exp: 38935798 },
    { lvl: 49, exp: 42850109 },
    { lvl: 50, exp: 47116709 },
    { lvl: 51, exp: 51767302 },
    { lvl: 52, exp: 56836449 },
    { lvl: 53, exp: 62361819 },
    { lvl: 54, exp: 68384473 },
    { lvl: 55, exp: 74949165 },
    { lvl: 56, exp: 82104680 },
    { lvl: 57, exp: 89904191 },
    { lvl: 58, exp: 98405658 },
    { lvl: 59, exp: 107672256 },
    { lvl: 60, exp: 117772849 },
    { lvl: 61, exp: 128782495 },
    { lvl: 62, exp: 140783010 },
    { lvl: 63, exp: 153863570 },
    { lvl: 64, exp: 168121381 },
    { lvl: 65, exp: 183662396 },
    { lvl: 66, exp: 200602101 },
    { lvl: 67, exp: 219066380 },
    { lvl: 68, exp: 239192444 },
    { lvl: 69, exp: 261129853 },
    { lvl: 70, exp: 285041630 },
    { lvl: 71, exp: 311105466 },
    { lvl: 72, exp: 339515048 },
    { lvl: 73, exp: 370481492 },
    { lvl: 74, exp: 404234916 },
    { lvl: 75, exp: 441026148 },
    { lvl: 76, exp: 481128591 },
    { lvl: 77, exp: 524840254 },
    { lvl: 78, exp: 572485967 },
    { lvl: 79, exp: 624419793 },
    { lvl: 80, exp: 681027665 },
    { lvl: 81, exp: 742730244 },
    { lvl: 82, exp: 809986056 },
    { lvl: 83, exp: 883294891 },
    { lvl: 84, exp: 963201521 },
    { lvl: 85, exp: 1050299747 },
    { lvl: 86, exp: 1145236814 },
    { lvl: 87, exp: 1248718217 },
    { lvl: 88, exp: 1361512946 },
    { lvl: 89, exp: 1484459201 },
    { lvl: 90, exp: 1618470619 },
    { lvl: 91, exp: 1764543065 },
    { lvl: 92, exp: 1923762030 },
    { lvl: 93, exp: 2097310703 },
    { lvl: 94, exp: 2286478756 },
    { lvl: 95, exp: 2492671933 },
    { lvl: 96, exp: 2717422497 },
    { lvl: 97, exp: 2962400612 },
    { lvl: 98, exp: 3229426756 },
    { lvl: 99, exp: 3520485254 },
]

export function calcCharacterLevel(exp: number, mercenary: boolean): LevelEXP[] {
    let maxLevel
    if (mercenary) {
        maxLevel = 98
    } else {
        maxLevel = 99
    }
    let level: LevelEXP = LEVEL_REQ_EXP[0]
    let nextLevel: LevelEXP = LEVEL_REQ_EXP[1]
    for (let i = 0; i < LEVEL_REQ_EXP.length; i++) {
        level = LEVEL_REQ_EXP[i]
        nextLevel = LEVEL_REQ_EXP[i + 1]
        if (nextLevel.lvl === maxLevel && exp >= nextLevel.exp) {
            level = nextLevel
            break
        }
        if (exp >= nextLevel.exp) {
            continue
        }
        if (exp < nextLevel.exp) {
            break
        }
    }
    return [level, nextLevel]
}

export function attrPointsFromLvl(lvl: number) {
    return lvl * 5
}

export function skillPointsFromLvl(lvl: number) {
    return lvl - 1
}