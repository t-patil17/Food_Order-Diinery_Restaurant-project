import { Component } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss'],
})
export class DessertsComponent {

  dessert: any = [];
  searching :any ={ name: '' , price:''};

  sweetitem: any = [
    {
      name: 'Brownies.',
      image: 'assets/brownie.jpg',
      quantity: 2,
      price: 'RS-200/-  ',
    },
    {
      name: 'Fruit salad.',
      image: 'assets/(Fruit_salad).jpg',
      quantity: 3,
      price: 'RS-250/- ',
    },
    {
      name: 'Milkshakes.',
      image: 'assets/milk-shakes.avif',
      quantity: 3,
      price: 'RS-160/-',
    },
    {
      name: 'Ice cream.',
      image: 'assets/ice-creame.webp',
      quantity: 2,
      price: 'RS-100/-',
    },

    {
      name: 'Turkish Delight.',
      image: 'assets/turkish delight.jpg',
      quantity: 1,
      price: 'RS-180/-',
    },
    {
      name: 'Nut Cake.',
      image: 'assets/nut cake.jpg',
      quantity: 4,
      price: 'RS-120/-',
    },
  ];

  add(i:any) {
    this.dessert.push(this.sweetitem [i]);

    console.log('hello');
  }

  delete(i: any){
    this.dessert.splice(i,1)
  }
}
