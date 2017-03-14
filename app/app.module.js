"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_2 = require("@angular/forms");
var product_addproduct_component_1 = require("./products/product-addproduct.component");
var welcome_component_1 = require("./home/welcome.component");
var helper_component_1 = require("./_helpers/helper.component");
//import {LoginComponent} from './users/login.component';
var contact_component_1 = require("./contact/contact.component");
var product_guard_service_1 = require("./products/product-guard.service");
var product_detail_component_1 = require("./products/product-detail.component");
var product_list_component_1 = require("./products/product-list.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var star_component_1 = require("./shared/star.component");
var app_component_1 = require("./app.component");
//import { AuthenticationService } from './_services/authentication.service';
var auth_guard_1 = require("./_guards/auth.guard");
var user_service_1 = require("./_services/user.service");
var login_component_1 = require("./login/login.component");
var http_2 = require("@angular/http");
//Everything we declare must be imported
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        //Pull those modules into our application
        imports: [platform_browser_1.BrowserModule, forms_2.ReactiveFormsModule,
            forms_1.FormsModule, http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'addproduct', component: product_addproduct_component_1.AddProductComponent },
                { path: 'product/:id', canActivate: [product_guard_service_1.ProductDetailGuard], component: product_detail_component_1.ProductDetailComponent },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'contact', component: contact_component_1.ContactComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ])
        ],
        declarations: [app_component_1.AppComponent,
            product_list_component_1.ProductListComponent, product_addproduct_component_1.AddProductComponent,
            product_filter_pipe_1.ProductFilterPipe, star_component_1.StarComponent, welcome_component_1.WelcomeComponent, helper_component_1.HelperComponent,
            login_component_1.LoginComponent, contact_component_1.ContactComponent, product_detail_component_1.ProductDetailComponent],
        providers: [product_guard_service_1.ProductDetailGuard, auth_guard_1.AuthGuard,
            // AuthenticationService,
            user_service_1.UserService,
            // providers used to create fake backend
            //fakeBackendProvider,
            //MockBackend,
            http_2.BaseRequestOptions],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map