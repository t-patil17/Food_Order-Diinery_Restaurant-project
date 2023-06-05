import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
 
  fooditem:any=[];

  Adddata : any=[
    {
      name:"Cheese burger" , image:"../../../assets/peppy burger.webp",  quantity:2 , price: "125Rs/-"
    },
    {name:"Veggie burger" , image:"../../../assets/bera burger.webp", quantity:4, price:"150Rs/-"},

    {name:"Crispy Veg Burger" , image:"../../../assets/DSC burger.jpg", quantity:4, price:"90Rs/-"},

    {name:"Butter Chicken Twin Burgers.", image:"../../../assets/im burger.jpg" , quantity:4, price:"120Rs/-"},
    
  ];

  pizzadata: any=[
    {name:"Peppy Paneer Pizza.", image:"../../../assets/mixed-pizza.avif" , quantity: 3, price:"190Rs/-"},

    {name:"BBQ Chicken Pizza.", image: "../../../assets/chiken piz.webp", quantity: 1, price:"250Rs/-"},

    {name:"Mexican Green Wave Pizza.", image:"../../../assets/Pizza-Crust.webp", quantity: 2, price:"300Rs/-"},

    {name:"Spring Pizza.", quantity: 4, image:"../../../assets/piz.jpg", price:"220Rs/-"},


  ]
  constructor(){

  }

  ngOnInit(): void {
    

    let data = localStorage.getItem('itemadd')
    if (data)
    this.fooditem = JSON.parse(data);
  }


  submit(i:any){

    this.fooditem.push(this.Adddata [i]);
    localStorage.setItem('itemadd', JSON.stringify(this.fooditem));
  }


  adding (i:any){
    this.fooditem.push(this.pizzadata[i]);
    localStorage.setItem('itemadd', JSON.stringify(this.fooditem));


  }

  delete(i:any){
    this.fooditem.splice(i , 1)

    alert("Are you sure cancle the order");
    localStorage.setItem('itemadd', JSON.stringify(this.fooditem));

  }

 


}
