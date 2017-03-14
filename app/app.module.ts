import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AddProductComponent} from './products/product-addproduct.component';
import {WelcomeComponent} from './home/welcome.component';
import {HelperComponent} from './_helpers/helper.component';
//import {LoginComponent} from './users/login.component';
import {ContactComponent} from './contact/contact.component';
import {ProductDetailGuard} from './products/product-guard.service';
import {ProductDetailComponent} from './products/product-detail.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import {AppComponent }  from './app.component';

//import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_guards/auth.guard';
import { UserService  } from './_services/user.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

//Everything we declare must be imported

@NgModule({
  //Pull those modules into our application
  imports: [ BrowserModule,ReactiveFormsModule,
  FormsModule,HttpModule,  
  RouterModule.forRoot([
    {path:'products',component:ProductListComponent},
    {path:'addproduct',component:AddProductComponent},
    {path:'product/:id', canActivate:[ProductDetailGuard], component:ProductDetailComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent},
    {path:'',redirectTo:'welcome',pathMatch:'full' },
    {path:'**',redirectTo:'welcome',pathMatch:'full'}
  ])
  ],
  declarations: [ AppComponent,
  ProductListComponent,AddProductComponent,
  ProductFilterPipe,StarComponent,WelcomeComponent,HelperComponent,
  LoginComponent,ContactComponent,ProductDetailComponent ],
  providers:[ProductDetailGuard,AuthGuard,
       // AuthenticationService,
        UserService,
        // providers used to create fake backend
        //fakeBackendProvider,
        //MockBackend,
        BaseRequestOptions],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
