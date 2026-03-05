import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {path:'', component: HomePage},
    {path: 'main', component: MainPage}
];
