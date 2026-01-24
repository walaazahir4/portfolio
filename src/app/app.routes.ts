import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Notfound } from './components/notfound/notfound';
import { Navbar } from './components/navbar/navbar';
import { MiniProj } from './components/mini-proj/mini-proj';
import { Contacts } from './components/contacts/contacts';
import { MyCert } from './components/my-cert/my-cert';

export const routes: Routes = [  
    {path: 'about', component: About},
    {path: 'nav', component: Navbar},
    {path: 'miniProj', component: MiniProj},
    {path: 'contacts', component: Contacts},
    {path: 'myCert', component: MyCert},
    {path: '', component: Home},
    {path: '**', component: Notfound},
];
