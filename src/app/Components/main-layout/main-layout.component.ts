import { Component } from '@angular/core';
import { ListingsComponent } from "../listings/listings.component";
import { UsersComponent } from "../users/users.component";
import { ReservationsComponent } from "../reservations/reservations.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { FooterComponent } from "../footer/footer.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet , ListingsComponent, UsersComponent, ReservationsComponent, ReviewsComponent, FooterComponent, SidebarComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
