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
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var product_service_1 = require("./product.service");
var product_list_component_1 = require("./product-list.component");
var star_component_1 = require("../shared/star.component");
var router_1 = require("@angular/router");
var AddProductComponent = (function () {
    function AddProductComponent(_productService, fb, _prodlstcomp, _router) {
        this._productService = _productService;
        this.fb = fb;
        this._prodlstcomp = _prodlstcomp;
        this._router = _router;
        this.pageTitle = "Add a Product";
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.addForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            code: new forms_1.FormControl(),
            available: new forms_1.FormControl(),
            price: new forms_1.FormControl(),
            rating: new forms_1.FormControl()
        });
        //  this._productService.postProducts(this.product)
        //   .subscribe(product => this.product=product);
    };
    AddProductComponent.prototype.onSubmit = function (event) {
        var _this = this;
        //this.product.Id=4;
        var userconfirm = confirm("The product will be added.Continue?");
        if (userconfirm) {
            this._productService.postProducts(this.addForm.value)
                .subscribe(function (res) {
                _this.product = res;
                _this._prodlstcomp.loadproducts();
            });
        }
    };
    AddProductComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return AddProductComponent;
}());
AddProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'product-addproduct.component.html',
        styleUrls: ['product-addproduct.component.css'],
        providers: [product_list_component_1.ProductListComponent, star_component_1.StarComponent]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, forms_2.FormBuilder, product_list_component_1.ProductListComponent, router_1.Router])
], AddProductComponent);
exports.AddProductComponent = AddProductComponent;
// public addForm=new FormGroup({
//    name:new FormControl("name"),
//    code:new FormControl("code"),
//    available:new FormControl("available"),
//    price:new FormControl("price"),
//    rating:new FormControl("rating")
// });
// public addForm=this.fb.group({
//    name:["",Validators.required],
//    code:["",Validators.required],
//    available:["",Validators.required],
//    price:["",Validators.required],
//    rating:["",Validators.required]});
//ngOnInit():void{
//  this._productService.getProducts()
//  .subscribe(products => this.products=products,
//            error => this.errorMessage=<any>error);
// loadproducts():void{
//   this._productService.getProducts()
//   .subscribe(res=>this.product=res,
//              error => this.errormessage=<any>error);
// }
//ngOnInit(){
// this._productService.postProducts()`
//.subscribe(product=>this.product=product,
//  error=>this.errormessage= error) 
//# sourceMappingURL=product-addproduct.component.js.map