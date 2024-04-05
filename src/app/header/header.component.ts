import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() {
    const menuBurger = document.querySelector(".menu-burger")
    const navLinks = document.querySelector(".nav-links")

    if (menuBurger && navLinks){
      menuBurger.addEventListener('click',()=>{
      navLinks.classList.toggle('mobile-menu');
    })
    }
    
  }
  
}