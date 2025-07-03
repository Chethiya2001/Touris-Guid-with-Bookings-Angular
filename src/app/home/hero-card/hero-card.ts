import { Component } from '@angular/core';
import { ContactusComponent } from "../../contactus/contactus";

@Component({
  selector: 'app-hero-card',
  imports: [ContactusComponent],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css'
})
export class HeroCard {

}
