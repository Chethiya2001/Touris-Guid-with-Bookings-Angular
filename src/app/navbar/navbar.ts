import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
 isDToggleDropDown = false;

 tooGleDropDown(){
  this.isDToggleDropDown = true;
  console.log(this.isDToggleDropDown)
 }
 
}
