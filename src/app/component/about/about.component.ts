import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BradComponent } from '../brad/brad.component';
import { HelpComponent } from '../help/help.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { CounterComponent } from '../counter/counter.component';
import { VolenteerComponent } from '../volenteer/volenteer.component';
import { DonationComponent } from '../donation/donation.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BradComponent,HelpComponent,ActivitiesComponent,CounterComponent, VolenteerComponent,DonationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
