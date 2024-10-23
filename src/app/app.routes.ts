import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { AvailableNowComponent } from './pages/available-now/available-now.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'card', component: CardComponent},
    {path: 'availableNow', component: AvailableNowComponent},
    { path: '**', component: PageNotFoundComponent }
];