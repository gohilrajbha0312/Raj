import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { SliderComponent } from './component/slider/slider.component';
import { HelpComponent } from './component/help/help.component';
import { ActivitiesComponent } from './component/activities/activities.component';
import { CausesComponent } from './component/causes/causes.component';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { PagesComponent } from './component/pages/pages.component';
import { ContectComponent } from './component/contect/contect.component';

export const routes: Routes = [
    {path:"",component:HomeComponent },
    {path:"about", component:AboutComponent},
    {path:"blog",component:BlogComponent},
    {path:"pages",component:PagesComponent},
    {path:"contect",component:ContectComponent  }

];
