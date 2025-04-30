import { Injectable, signal } from '@angular/core';
import { DIFFICULTY_ENUM } from '@model/player/difficulty';
import { DEN_OF_EVIL_QUEST_ID, DenOfEvil } from '@model/quest/act1/den_of_evil';
import { Quest, QUEST_STAGE_ENUM } from '@model/quest/quest';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  act1_quest1 = signal<Quest>(new DenOfEvil())
  // act1_quest2 = signal<Quest>(DenOfEvil)
  // act1_quest3 = signal<Quest>(DenOfEvil)
  // act1_quest4 = signal<Quest>(DenOfEvil)
  // act1_quest5 = signal<Quest>(DenOfEvil)
  // act1_quest6 = signal<Quest>(DenOfEvil)
  // act2 = signal<ActQuests | undefined>(undefined)
  // act3 = signal<ActQuests | undefined>(undefined)
  // act4 = signal<ActQuests | undefined>(undefined)
  // act5 = signal<ActQuests | undefined>(undefined)

  constructor() {
  }

  public updateQuest(quest_id: string, stage: QUEST_STAGE_ENUM, difficulty: DIFFICULTY_ENUM) {
    switch (quest_id) {
      case DEN_OF_EVIL_QUEST_ID:
        this.act1_quest1.update((old_state) => {
          let new_state = old_state.cloneQuest()
          this.updateQuestState(new_state, stage, difficulty)
          return new_state
        })
        break;

      default:
        break;
    }

  }

  private updateQuestState(quest: Quest, stage: QUEST_STAGE_ENUM, difficulty: DIFFICULTY_ENUM) {
    switch (stage) {
      case QUEST_STAGE_ENUM.INITIATION:
        quest.initiation[difficulty] = true
        return
      case QUEST_STAGE_ENUM.AFTER_INITIATION:
        quest.after_initiation[difficulty] = true
        return
      case QUEST_STAGE_ENUM.EARLY_RETURN:
        quest.early_return[difficulty] = true
        return
      case QUEST_STAGE_ENUM.UPON_COMPLETION:
        quest.upon_completion[difficulty] = true
        return
      case QUEST_STAGE_ENUM.COMPLETE:
        quest.complete[difficulty] = true
        return
    }
  }

  // attrPointsFromQuests() {
  //     let points = 0
  //     if (this.act3.quest4.complete.normal) {
  //         points += 5
  //     }
  //     if (this.act3.quest4.complete.nightmare) {
  //         points += 5
  //     }
  //     if (this.act3.quest4.complete.hell) {
  //         points += 5
  //     }
  //     return points
  // }

  // skillPointsFromQuests() {
  //     let points = 0
  //     if (this.act1.quest1.complete.normal) {
  //         points += 1
  //     }
  //     if (this.act1.quest1.complete.nightmare) {
  //         points += 1
  //     }
  //     if (this.act1.quest1.complete.hell) {
  //         points += 1
  //     }
  //     if (this.act2.quest1.complete.normal) {
  //         points += 1
  //     }
  //     if (this.act2.quest1.complete.nightmare) {
  //         points += 1
  //     }
  //     if (this.act2.quest1.complete.hell) {
  //         points += 1
  //     }
  //     if (this.act4.quest1.complete.normal) {
  //         points += 2
  //     }
  //     if (this.act4.quest1.complete.nightmare) {
  //         points += 2
  //     }
  //     if (this.act4.quest1.complete.hell) {
  //         points += 2
  //     }
  //     return points
  // }
}
