import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

 @Input()  fooditem :any ;
 Adddata :any = [];

 pizzadata: any=[];

  constructor(){

    let data = localStorage.getItem('items');
    if(data)
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

  ngOnInit(): void {
    
  }

}
