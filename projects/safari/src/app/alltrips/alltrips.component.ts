import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-alltrips',
  imports: [CarouselModule,CommonModule],
  templateUrl: './alltrips.component.html',
  styleUrl: './alltrips.component.less',
})
export class AlltripsComponent {
  isClicked = false;
  destination: { name: string; img: string } | null = null;

  travelInterests: string[] = [
    'Beach',
    'Mountains',
    'View',
    'Water Falls',
    'Trekking',
    'Nature',
    'Spiritual',
    'TeaGardens',
    'HillStation',
    'Culture'
  ];


  destinationMap: { [key: string]: { name: string; img: string } } = {
    Beach: { name: 'Goa', img: 'assets/GoaImg.webp' },
    Mountains: { name: 'Manali', img: 'assets/manalliImg.webp' },
    View: { name: 'Kashmir', img: 'assets/kashmirImg.webp' },
    "Water Falls": { name: 'Meghalaya', img: 'assets/MeghalayaImg.jpeg' },
    Trekking: { name: 'Kodaikonal', img: 'assets/KodaikonalImg.jpeg' },
    Nature: { name: 'Kerala', img: 'assets/keralaImg.webp' },
    Spiritual: { name: 'Gokarna', img: 'assets/GokarnaImg.webp' },
    TeaGardens: { name: 'Darjiling', img: 'assets/DarjilingImg.jpeg' },
    HillStation: { name: 'Ooty', img: 'assets/OotyImg.webp' },
    Culture: { name: 'Rajasthan', img: 'assets/RajasthanImg.jpeg' }
  };


  askAI() {
    this.isClicked = true;
  }

  onClick(choice: string) {
    this.isClicked = false;
    this.destination = this.destinationMap[choice] || null;
  }

  imageSlides :any = [
    {name:'Gokarna', img:'assets/GokarnaImg.webp' },
    {name:'Kerala', img:'assets/keralaImg.webp'},
    {name:'Kashmir', img:'assets/kashmirImg.webp'},
    {name:'Manali', img:'assets/manalliImg.webp'},
    {name:'Goa', img:'assets/GoaImg.webp'},
    {name:'Ooty', img:'assets/OotyImg.webp'},
    {name:'Darjiling', img:'assets/DarjilingImg.jpeg'},
    {name:'Kodaikonal', img:'assets/KodaikonalImg.jpeg'},
    {name:'Meghalaya', img:'assets/MeghalayaImg.jpeg'},
    {name:'Rajasthan', img:'assets/RajasthanImg.jpeg'},
  ]

  tryAgain() {
    this.destination = null;
    this.isClicked = true;
  }

  clear () {
    this.destination = null;
    this.isClicked = false;
  }


  hiddenGems: any = [
    {
      name: 'Nirvana Beach',
      img: 'assets/nirvanaBeach-gokarna.jpg',
      destination: 'Gokarna',
      description: `Nirvana Beach is a quiet, offbeat shoreline perfect for travelers seeking peace and solitude.
  Unspoiled by commercial tourism, the beach offers long walks, yoga sessions, and peaceful sunsets.
  Camping under the stars is a popular experience here.
  The natural beauty makes it one of the most underrated coastal escapes in India.`
    },
    {
      name: 'Alleppey Backwaters',
      img: 'assets/alleppey_backwaters-kerala.webp',
      destination: 'Kerala',
      description: `The Alleppey backwaters offer a unique blend of nature and culture, best explored on a houseboat.
  You’ll float past coconut trees, quaint villages, and paddy fields mirrored in the water.
  The region’s calm pace offers a deep sense of relaxation.
  It's also known for traditional Kerala cuisine served onboard.`
    },
    {
      name: 'Great Winter',
      img: 'assets/Great_winter-kashmir.webp',
      destination: 'Kashmir',
      description: `Experience the pristine charm of Kashmir in winter, when snow blankets the entire valley.
  The scenery turns magical with frozen lakes and snow-laden trees.
  Activities like skiing in Gulmarg and shikara rides in a frozen Dal Lake are unforgettable.
  It’s a perfect winter wonderland for both adventure lovers and peace seekers.`
    },
    {
      name: 'Solang Valley',
      img: 'assets/solang-valley-manali.jpg',
      destination: 'Manali',
      description: `Solang Valley is a hub for adventure sports in Himachal Pradesh.
  From paragliding in summer to skiing in winter, it’s active year-round.
  Surrounded by snow-covered peaks, it’s a great destination for thrill-seekers.
  The cable car ride offers spectacular aerial views of the Himalayas.`
    },
    {
      name: 'Palolem Beach',
      img: 'assets/Palolem Beach-goa.webp',
      destination: 'Goa',
      description: `Palolem is one of Goa’s cleanest and most peaceful beaches, ideal for those avoiding the crowds.
  You can enjoy kayaking, dolphin spotting, or simply relax in a beach hut.
  The area is lined with palm trees and vibrant cafes.
  It’s a tranquil alternative to Goa’s usual party vibe.`
    },
    {
      name: 'Botanical Garden',
      img: 'assets/botanicagarden-ooty.webp',
      destination: 'Ooty',
      description: `Ooty’s Botanical Garden is home to over 650 species of plants and trees.
  The garden is beautifully landscaped and ideal for nature walks.
  Highlights include the fossil tree trunk and glasshouse.
  A great spot for picnics, photography, and understanding rare flora.`
    },
    {
      name: 'Batasia Loop Joy Ride',
      img: 'assets/Batasia-Loop-Joy Ride-Darjeeling.jpeg',
      destination: 'Darjeeling',
      description: `The Batasia Loop is a spiral railway track offering stunning views of Mount Kanchenjunga.
  The toy train's slow ride through this loop is a unique experience.
  The location also hosts a war memorial dedicated to Gorkha soldiers.
  It’s a blend of scenic beauty, nostalgia, and respect.`
    },
    {
      name: 'Mannavanur Lake',
      img: 'assets/Mannavanur_Lake-Kodaikanal.webp',
      destination: 'Kodaikanal',
      description: `Mannavanur Lake is a serene escape just 34 km from Kodaikanal.
  Surrounded by rolling grasslands and pine trees, it’s a perfect picnic spot.
  Boating and nature walks are popular activities here.
  The adjacent sheep farm adds to the charm and uniqueness of this hidden gem.`
    },
    {
      name: 'Nohsngithiang Falls',
      img: 'assets/Nohsngithiang_falls-meghalaya.webp',
      destination: 'Meghalaya',
      description: `Known as the Seven Sisters Falls, these majestic cascades are a monsoon marvel.
  The falls gush down from a height of over 1,000 feet on limestone cliffs.
  Best viewed from the eco park nearby, especially during rainy months.
  The surrounding lush greenery completes the awe-inspiring experience.`
    },
    {
      name: 'Mehrangarh Fort',
      img: 'assets/Mehrangarh_fort-rajasthan.webp',
      destination: 'Rajasthan',
      description: `Mehrangarh Fort towers above the city of Jodhpur and tells tales of Rajput valor.
  Explore its massive courtyards, intricate carvings, and well-preserved palaces.
  The museum inside holds weapons, paintings, and artifacts from Rajasthan's royal past.
  At sunset, the view from the ramparts over the blue city is unforgettable.`
    }
  ];

}


