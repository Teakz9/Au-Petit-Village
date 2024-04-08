import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-propos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './propos.component.html',
  styleUrl: './propos.component.css'
})
export class ProposComponent {

}
