import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ContactusComponent } from './contactus/contactus';
import { BookingComponent } from './booking/booking';
import { NewsCompoent } from './news/news';
import {  ProfileComponent } from './profile/profile';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: 'contact',
    component: ContactusComponent,
    title: 'Contact Us',
  },
  {
    path: 'booking',
    component: BookingComponent,
    title: 'Booking',
  },{
    path:'news',
    component:NewsCompoent,
    title:"News & Blogs"
  },
  {
    path:'profile',
    component:ProfileComponent,
    title:"Profile"
  }
];
