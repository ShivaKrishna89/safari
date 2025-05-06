import { AfterViewInit, Component, ElementRef, model, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {


destinations :any = [
  {icon: 'assets/GOKARNA-DANDELI.webp' },
  {icon: 'assets/KERALA.webp'},
  {icon: 'assets/KASHMIR.webp'},
  {icon: 'assets/MANALI.webp'},
  {icon: 'assets/GOA.webp'},
  {icon: 'assets/DARJEELING.webp'},
  { icon: 'assets/KODAIKANAL.webp'},
  {icon: 'assets/MEGHALAYA.webp'},
  {icon: 'assets/OOTY.webp'},
  {icon: 'assets/RAJASTHAN.webp'},
]

trendingDestinations :any = [
  {icon: 'assets/GOKARNA-DANDELI.webp', name:'Gokarna', img:'assets/GokarnaImg.webp' },
  {icon: 'assets/KERALA.webp', name:'Kerala', img:'assets/keralaImg.webp'},
  {icon: 'assets/KASHMIR.webp', name:'Kashmir', img:'assets/kashmirImg.webp'},
  {icon: 'assets/MANALI.webp', name:'Manali', img:'assets/manalliImg.webp'},
  {icon: 'assets/GOA.webp', name:'Goa', img:'assets/GoaImg.webp'},
  {icon: 'assets/OOTY.webp', name:'Ooty', img:'assets/OotyImg.webp'},
]

}
