import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';
import { Proddetail } from './pages/proddetail/proddetail';

export const routes: Routes = [
    {
        path: '',component:Home
    },
    {
        path: 'product', component:Product
    },
    {
        path: 'about', component:About
    },
    {   path: 'contact', component:Contact
        
    },
    {
        path:'proddetail/:id', component:Proddetail
    }

];
