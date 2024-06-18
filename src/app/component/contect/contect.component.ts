import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToughComponent } from '../tough/tough.component';


@Component({
  selector: 'app-contect',
  standalone: true,
  imports: [RouterLink,ToughComponent],
  templateUrl: './contect.component.html',
  styleUrl: './contect.component.css'
})
export class ContectComponent {

}
