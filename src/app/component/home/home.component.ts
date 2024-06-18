import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { CausesComponent } from '../causes/causes.component';
import { HelpComponent } from '../help/help.component';
import { CounterComponent } from '../counter/counter.component';
import { VolenteerComponent } from '../volenteer/volenteer.component';
import { NewsComponent } from '../news/news.component';
import { DonationComponent } from '../donation/donation.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,ActivitiesComponent,CausesComponent,HelpComponent,CounterComponent,VolenteerComponent,NewsComponent,
    DonationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
