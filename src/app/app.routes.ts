import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contactus } from './home/contactus/contactus';
import { Booking } from './home/booking/booking';
import { News } from './home/news/news';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: 'contact',
    component: Contactus,
    title: 'Contact Us',
  },
  {
    path: 'booking',
    component: Booking,
    title: 'Booking',
  },{
    path:'news',
    component:News,
    title:"News & Blogs"
  }
];
