import { Component } from '@angular/core';
import { BookCard } from "./book-card/book-card";
import { DesignitionCard } from "./designition-card/designition-card";
import { HeroCard } from "./hero-card/hero-card";
import { ServicesCard } from "./services-card/services-card";

@Component({
  selector: 'app-home',
  imports: [BookCard, DesignitionCard, HeroCard, ServicesCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
