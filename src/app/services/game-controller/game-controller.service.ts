import { Injectable, signal } from '@angular/core';
import { DIFFICULTY_ENUM } from '@model/player/difficulty';
import { Act } from '@model/zones/act';
import { generate_act_1 } from '@model/zones/act1/act1';
import { Zone } from '@model/zones/zone';
import { ACT_ENUM } from '@shared/enum/act.enum';

@Injectable({
  providedIn: 'root'
})
export class GameControllerService {
  current_act = signal<ACT_ENUM>(ACT_ENUM.ACT1)
  current_zone = signal<Zone | undefined>(undefined)

  act1 = signal<Act | undefined>(undefined)
  act2 = signal<Act | undefined>(undefined)
  act3 = signal<Act | undefined>(undefined)
  act4 = signal<Act | undefined>(undefined)
  act5 = signal<Act | undefined>(undefined)

  difficulty = signal<DIFFICULTY_ENUM>(DIFFICULTY_ENUM.NORMAL)
  constructor() {
  }

  changeZone(zoneId: string, act_id: ACT_ENUM): boolean {
    // ZONE IN CURRENT ACT
    if (this.current_act() === act_id) {
      let act = this.getCurrentAct()
      let zone = act.findZone(zoneId)
      if (zone !== undefined) {
        this.current_zone.set(zone)
        return true
      } else {
        return false
      }
    }
    return false
    // if (this.acts()[act_id] === undefined) {
    //   let generated
    //   try {
    //     generated = this.generateAct(act_id, this.difficulty())
    //     return this.changeZone(zoneId, act_id)
    //   } catch (error) {
    //     alert(error)
    //     return false
    //   }
    // } else {
    //   let found = this.acts()[act_id].findZone(zoneId)
    //   if (found) {
    //     this.current_zone.set(zoneId)
    //     this.current_act.set(act_id)
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  }

  getCurrentAct(): Act {
    let act
    switch (this.current_act()) {
      default:
        this.current_act.set(ACT_ENUM.ACT1)
        act = this.act1()
        if (act === undefined) {
          act = generate_act_1(this.difficulty())
          this.act1.set(act)
        }
        return act
    }
  }

  generateAct(act_to_build: ACT_ENUM, difficulty: DIFFICULTY_ENUM) {
    let GeneratedAct: Act | undefined
    GeneratedAct = generate_act_1(difficulty)
    // switch (act_to_build) {
    //   case ACT_ENUM.ACT1:
    //     GeneratedAct = generate_act_1(difficulty)
    //     break;
    //   default:
    //     throw new Error("Error building game controller, act not found:" + act_to_build);
    // }
    if (GeneratedAct !== undefined) {
      this.act1.set(GeneratedAct)
    } else {
      throw new Error("Error while trying to generate act:" + act_to_build)
    }
  }
}
