import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    //The component's view is injected at <router-outlet>'
    template: `
    <div>
     <nav class='navbar navbar-default'>
      <div class='container-fluid'>
       <a class='navbar-brand'><b><i>{{pageTitle}}</i></b></a>
        <ul class='nav navbar-nav'>
        <li><a [routerLink]="['/welcome']"><i class='glyphicon glyphicon-home'></i>  Welcome</a></li>
        <li><a [routerLink]="['/login']"><i class='glyphicon glyphicon-user'></i>  Log in</a></li>
        <li><a [routerLink]="['/products']">Product List</a></li>
        <li><a [routerLink]="['/addproduct']">Add Product</a></li>
        <li><a [routerLink]="['/contact']">Contact</a></li>
        </ul>
      </div>
     </nav>
     <div class='container'>
       <router-outlet></router-outlet>
     </div>
    </div>
    `,
    providers:[ProductService]
})
export class AppComponent { 

    pageTitle: string='GK Product Management';
}
