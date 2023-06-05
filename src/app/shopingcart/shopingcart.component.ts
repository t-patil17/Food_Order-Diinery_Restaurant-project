import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-shopingcart',
  templateUrl: './shopingcart.component.html',
  styleUrls: ['./shopingcart.component.scss']
})
export class ShopingcartComponent  implements OnInit  {

  // @Input() 'dessert' : any;

  // sweetitem: any = [];

  // add(i:any) {
  //   this.dessert.push(this.sweetitem [i]);

  //   console.log('hello');
  // }

  // delete(i: any){
  //   this.dessert.splice(i,1) 
  // }


  @Input() fooditem : any ;

  Adddata : any=[];

  pizzadata: any=[];

  // submit(i:any){

  //   this.fooditem.push(this.Adddata [i]);

  // }


  adding (i:any){
    this.fooditem.push(this.pizzadata[i]);
    localStorage.setItem('itemadd',JSON.stringify(this.fooditem));


  }

  delete(i:any){
    this.fooditem.splice(i , 1)

    alert("Are you sure cancle the order");

    localStorage.setItem('itemadd',JSON.stringify(this.fooditem));
  }


  constructor(){
    let data = localStorage.getItem('itemadd');
    if(data)
    this.fooditem = JSON.parse(data);

  }

 ngOnInit(): void {
  
   }

}
