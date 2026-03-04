import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductList } from './product-list/product-list';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { AboutDetail } from './about-detail/about-detail';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'about',
        component: About,
        children: [
            {
                path: ':subject',
                component: AboutDetail
            }
        ]
    },
    {
        path: 'products',
        component: ProductList
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
