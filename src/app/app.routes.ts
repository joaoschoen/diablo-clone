import { Routes } from '@angular/router';
import { CharacterCreationPageComponent } from './pages/character-creation-page/character-creation-page.component';
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
    }
];
