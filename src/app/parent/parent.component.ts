import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  fooditem:any=[];

  Adddata : any=[
    {
      name:"Blue Hurricane " , image:"assets/blue-cocktail-drink.jpeg",  quantity:2 , price: "225Rs/-"
    },
    {name:"Mock Champagane" , image:"assets/mocktail-2.jpg", quantity:4, price:"800Rs/-"},

    {name:"Non alcoholic drink" , image:"assets/mock 3.jpg", quantity:4, price:"940Rs/-"},

    {name:"Shirley Temple", image:"assets/-shirley-temple.jpg" , quantity:4, price:"1200Rs/-"},
    
  ];

  pizzadata: any=[
    {name:"Mojito Cocktail.", image:"assets/mojito.jpg" , quantity: 3, price:"500Rs/-"},

    {name:"Whiskey Sour.", image: "assets/whisky.jpg", quantity: 1, price:"650Rs/-"},

    {name:"Aperol Spritz.", image:"assets/aperol-spritz-drink.jpg", quantity: 2, price:"320Rs/-"},

    {name:" Margarita.", quantity: 4, image:"assets/margita.jpg", price:"580Rs/-"},

  ]

  
  ngOnInit(): void {
    let data = localStorage.getItem('items')
    if (data) 
      this.fooditem = JSON.parse(data);
    
  }

  submit(i:any){

    this.fooditem.push(this.Adddata [i]);

    localStorage.setItem('items', JSON.stringify(this.fooditem))
  }

  adding (i:any){
    this.fooditem.push(this.pizzadata[i]);

    localStorage.setItem('items', JSON.stringify(this.fooditem))

  }

  delete(i:any){
    this.fooditem.splice(i , 1)

    alert("Are you sure cancle the order");

    localStorage.setItem('items', JSON.stringify(this.fooditem))

  }



}
