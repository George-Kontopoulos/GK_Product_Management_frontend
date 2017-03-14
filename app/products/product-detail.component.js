"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var forms_1 = require("@angular/forms");
var helper_component_1 = require("../_helpers/helper.component");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router, _service, _helper) {
        this._route = _route;
        this._router = _router;
        this._service = _service;
        this._helper = _helper;
        this.pageTitle = 'Product ID';
        this.showForm = false;
    }
    //1.we use snapshot if the url is not going to change
    //else use Observable
    //2.When we want to read parameters from a url we use ActivatedRoute 
    //and then put the code to read the url in ngOnInit
    //--------Instantiate currentProduct with call to backend-------------
    //   currentProductInit():void{
    //     let id = +this._route.snapshot.params['id'];
    //      this.pageTitle += `:${id}`;
    //      this.currentId=id;
    //      this._service.getProductById(id)
    //                   .subscribe(res=>this.currentProduct=res,
    //                              error => this.errorMessage=<any>error);
    //   }
    //--------Instantiate currentProduct with call to backend-------------
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ":" + id;
        this.currentId = id;
        this._service.getProductById(id)
            .subscribe(function (res) { return _this.product = res; }, function (error) { return _this.errorMessage = error; });
        this.updateForm = new forms_1.FormGroup({
            id: new forms_1.FormControl(),
            name: new forms_1.FormControl(),
            code: new forms_1.FormControl(),
            available: new forms_1.FormControl(),
            price: new forms_1.FormControl(),
            rating: new forms_1.FormControl()
        });
        //this.getProduct(this.newId);
        //  this._service.getProducts().subscribe(response=>{this.product=response;console.log(this.product.filter(this.filterf))},error=>{});//
        //    this._service.getProducts().filter(product=>product.id==id).subscribe(product=>this.product.code=product.code); 
        //    this._service.getProducts().filter(product=>product.id==id).subscribe(product=>this.product.available=product.available); 
        //    this._service.getProducts().filter(product=>product.id==id).subscribe(product=>this.product.price=product.price); 
        //    this._service.getProducts().filter(product=>product.id==id).subscribe(product=>this.product.rating=product.rating);                                                                           
        //  this.product=this._lst.onProductDetail();
        // this.product.name=this.productObs.subscribe()
        //console.log(this.name); 
    };
    ProductDetailComponent.prototype.onUpdate = function (event) {
        var _this = this;
        if (this._helper.isEquivalent(this.currentProduct, this.product)) {
            //this.product.id=this.currentId;
            alert("You haven't made any changes to the product...");
        }
        else {
            this._service.updateProduct(this.product)
                .subscribe(function (res) { return _this.product = res; }, function (error) { return _this.errorMessage = error; });
            alert("The product was updated succesfully!!!");
        }
    };
    ProductDetailComponent.prototype.onSwitchForms = function () {
        this.currentProduct = __assign({}, this.currentProduct, this.product);
        this.showForm = !this.showForm;
    };
    // filterf(p:IProduct){
    //     return p.id==120;
    // }
    //    getProduct(id:number):void{
    //    this._service.getProductById(id)
    //                 .subscribe(res=>this.product=res,
    //                  error => this.errorMessage=<any>error);
    //     //let output;
    //     //this._service.getProducts().filter(this.filterf).subscribe(product=>output=product).unsubscribe();
    //     // return output;
    //    }
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.onCancel = function () {
        this.onSwitchForms();
        this._router.navigate(['product/' + this.currentId]);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        //Selector is required only if our component will be nested into an another component
        moduleId: module.id,
        templateUrl: './product-detail.component.html',
        providers: [product_service_1.ProductService, helper_component_1.HelperComponent]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService,
        helper_component_1.HelperComponent])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map