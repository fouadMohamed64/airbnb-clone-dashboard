import { Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ListingsComponent } from './Components/listings/listings.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { UsersComponent } from './Components/users/users.component';
import { ReservationsComponent } from './Components/reservations/reservations.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {path: '', component: MainLayoutComponent, title: 'main-layout', children: [
        {path: 'home', component: HomeComponent, title: 'home' , pathMatch: 'full'},
        {path: 'listings', component: ListingsComponent, title: 'listings'},
        {path: 'reviews', component: ReviewsComponent, title: 'reviews'},
        {path: 'users', component: UsersComponent, title: 'users'},
        {path: 'reservations', component: ReservationsComponent, title: 'reservations'},
        {path: 'login', component: LoginComponent, title: 'login'},
    ]},
    {path: '**', component: NotFoundComponent, title: 'not-found-page'}
];
