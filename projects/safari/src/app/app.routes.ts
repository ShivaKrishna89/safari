import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlltripsComponent } from './alltrips/alltrips.component';
import { DestinationComponent } from './destination/destination.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
          {path: 'home', component:HomeComponent},
          {path: 'alltrips', component:AlltripsComponent},
          {path: 'destination', component:DestinationComponent},
          {path: 'aboutus', component:AboutusComponent},
          {path: 'contactus', component:ContactusComponent},
          { path: 'default', component: HomeComponent},
          { path: '**', redirectTo: '/home'}
];
