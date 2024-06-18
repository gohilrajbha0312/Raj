import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
