import { Routes } from '@angular/router';
import { TodosBox } from './todos-box/todos-box';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/all',
        pathMatch: 'full'
    },
    {
        path: ':filter',
        component: TodosBox,
    }
];
