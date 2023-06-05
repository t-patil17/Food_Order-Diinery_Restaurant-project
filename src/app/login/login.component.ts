import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

email ="";
password ="";

constructor(public router: Router){

}

login(){
 
  if(this.email == '')
  {
    alert("please Enter your email id");
    return;
  }

  else if(this.password ==''){
    alert("please enter password");
    return;
  }
 
  this.router.navigateByUrl('/home')
 

}



}
