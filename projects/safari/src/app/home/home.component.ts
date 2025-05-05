import { AfterViewInit, Component, ElementRef, model, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    setInterval(() => {
      const container = this.destinationsContainer.nativeElement;
      const currentPos = container.scrollLeft;

      if (currentPos >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        container.scrollLeft += 100;
      }
    }, 2000);
  }

  @ViewChild('destinationsContainer', { static: false }) destinationsContainer: any;

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

}
