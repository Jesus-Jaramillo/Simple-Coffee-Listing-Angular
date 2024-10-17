import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'nav', component: NavbarComponent},
    {path: 'card', component: CardComponent}
];
