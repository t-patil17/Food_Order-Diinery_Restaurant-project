import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  name ="";
  price ="";
  quantity : any ;
  image = "";

  foodie : any =[];

  sweetdish : any =[];


  additems(){
    let object= {
      name:this.name,
      price:this.price,
      quantity:this.quantity,
      image:this.image
    }
    this.foodie.push(object);
    this.clear();
    // this.close();

  }

  addish(){
    let object= {
      name:this.name,
      price:this.price,
      quantity:this.quantity,
      image:this.image
    }
    this.sweetdish.push(object)
    this.clear();
    // this.close2();


  }

  clear(){
    this.name ='',
    this.price ='',
    this.quantity ='',
    this.image =''
  }

  remove(i:any){
    this.sweetdish.splice(i,1)
  }

  delete(i:any)
 {
  this.foodie.splice(i,1)

 }


//  close()
// {
//   this.name ='',
//     this.price ='',
//     this.quantity ='',
//     this.image =''

// }  
// close2()
// {
//   this.name ='',
//   this.price ='',
//   this.quantity ='',
//   this.image =''

// }


selectfile(e:any){
    if (e.target.files) {
      var read = new FileReader();
      read.readAsDataURL(e.target.files[0]);
      read.onload = (event:any) =>{
        this.image = event.target.result ;
      }
    }
  }
}
