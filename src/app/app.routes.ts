import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Info } from './paginas/info/info';
import { Instrumentos } from './paginas/instrumentos/instrumentos';
import { Header } from './paginas/header/header';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, children: [
        { path: 'info', component: Info },
        { path: 'instrumentos', component: Instrumentos },
        { path: 'header', component: Header }
    ]},
    { path: '**', redirectTo: 'home' }
];
