// import { Component,OnInit } from '@angular/core';
// import {FormGroup,FormControl} from '@angular/forms';
// import {ProductService} from '../products/product.service';
// import {IUser} from './user';

// @Component({
//     templateUrl: 'app/users/login.component.html',
//      styleUrls:['app/users/login.component.css']
// })
// export class LoginComponent implements OnInit {
//     public pageTitle: string = 'Please Login to access the application';
//     public activeUser=false;
//     public user:IUser;
//     public loginForm:FormGroup;

//    ngOnInit():void{
//        this.loginForm=new FormGroup({
//         Username:new FormControl(),
//         Password:new FormControl()
//         });
//    }

//    constructor(private _productService:ProductService){
//    }


//    onLogin():void{
//      this._productService.postCredentials(this.loginForm.value)
//      .subscribe(user=>this.user=user);

//    }
// }
