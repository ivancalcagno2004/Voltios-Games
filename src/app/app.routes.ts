import { Routes } from '@angular/router';
import {GameCarouselComponent} from "./main-content/game-carousel/game-carousel.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: GameCarouselComponent,
    },
];
