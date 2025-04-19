import { Routes } from '@angular/router';
import { CharacterCreationPageComponent } from './pages/character-creation-page/character-creation-page.component';
import { CharacterSelectionPageComponent } from './pages/character-selection-page/character-selection-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "game",
        component: GamePageComponent
    },
    {
        path: "character-creation",
        component: CharacterCreationPageComponent
    },
    {
        path: "character-selection",
        component: CharacterSelectionPageComponent
    }
];
