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
  constructor(){
    document.addEventListener('DOMContentLoaded', () => {
    const burger: HTMLElement | null = document.querySelector("#burger");
    const nav: HTMLElement | null = document.querySelector(".nav");

    if (burger && nav) {
      burger.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    } 
  })

  }
}
  
