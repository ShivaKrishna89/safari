import { AfterViewInit, Component, ElementRef, model, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselModule],
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
imageSlides = [
  { src: '/assets/Untitled-design-1.webp', caption: 'Beautiful Mountain' },
  { src: '/assets/Untitled-design-2.webp', caption: 'Kashmir' },
  { src: '/assets/Untitled-design-3.webp', caption: 'Sunny Beach' },
  { src: '/assets/Untitled-design-4.webp', caption: 'Misty Forest' },
  { src: '/assets/Untitled-design-6.webp', caption: 'Serene Lake' },
  { src: '/assets/Untitled-design-7.webp', caption: 'Golden Desert' },
  { src: '/assets/Untitled-design-8.webp', caption: 'Snowy Peaks' },
  { src: '/assets/Untitled-design-9.webp', caption: 'Rainy City' },
  { src: '/assets/Untitled-design-10.webp', caption: 'Green Hills' },
  { src: '/assets/Untitled-design-11.webp', caption: 'Urban Skyline' },
  { src: '/assets/Untitled-design-12.webp', caption: 'Starry Night' }
];


trendingDestinations :any = [
  {icon: 'assets/GOKARNA-DANDELI.webp', name:'Gokarna', img:'assets/GokarnaImg.webp' },
  {icon: 'assets/KERALA.webp', name:'Kerala', img:'assets/keralaImg.webp'},
  {icon: 'assets/KASHMIR.webp', name:'Kashmir', img:'assets/kashmirImg.webp'},
  {icon: 'assets/MANALI.webp', name:'Manali', img:'assets/manalliImg.webp'},
  {icon: 'assets/GOA.webp', name:'Goa', img:'assets/GoaImg.webp'},
  {icon: 'assets/OOTY.webp', name:'Ooty', img:'assets/OotyImg.webp'},
]

}
