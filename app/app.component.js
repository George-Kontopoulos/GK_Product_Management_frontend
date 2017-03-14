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
var product_service_1 = require("./products/product.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'GK Product Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        //The component's view is injected at <router-outlet>'
        template: "\n    <div>\n     <nav class='navbar navbar-default'>\n      <div class='container-fluid'>\n       <a class='navbar-brand'><b><i>{{pageTitle}}</i></b></a>\n        <ul class='nav navbar-nav'>\n        <li><a [routerLink]=\"['/welcome']\"><i class='glyphicon glyphicon-home'></i>  Welcome</a></li>\n        <li><a [routerLink]=\"['/login']\"><i class='glyphicon glyphicon-user'></i>  Log in</a></li>\n        <li><a [routerLink]=\"['/products']\">Product List</a></li>\n        <li><a [routerLink]=\"['/addproduct']\">Add Product</a></li>\n        <li><a [routerLink]=\"['/contact']\">Contact</a></li>\n        </ul>\n      </div>\n     </nav>\n     <div class='container'>\n       <router-outlet></router-outlet>\n     </div>\n    </div>\n    ",
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map