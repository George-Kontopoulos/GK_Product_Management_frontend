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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var ProductService = (function () {
    //We want Angular to provide us an instance of http client service,
    //so we identify it as a dependency in the constructor
    function ProductService(_http) {
        this._http = _http;
        //   private _id:number;
        //   private _JsonArray=[this.getProducts()];
        //   private _JsonObj=this._JsonArray.pop();
        //   private _dato=this._JsonObj.subscribe(products=>this._id=products.id);
        //private _productUrl='api/products/products.json';
        //private _initId=1;
        this._productUrl = 'http://localhost:11212/api/products';
        this._deleteProductUrl = 'http://localhost:11212/api/products/deleteproduct';
        this._authenticationUrl = "";
    }
    ProductService.prototype.requestConnection = function () {
        return this._http.request(this._productUrl)
            .map(function (response) {
            if (response.status != 200) {
                console.log('Something went wrong on the server');
            }
            else {
                console.log('Connected to server');
            }
        })
            .catch(this.handleError);
    };
    ProductService.prototype.getProducts = function () {
        return this._http.get(this._productUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.getProductById = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log("Retrieving product with id: " + id);
        return this._http.get(this._productUrl + "/getproduct/" + id, options)
            .map(function (response) { return response.json(); })
            .share()
            .catch(this.handleError);
    };
    ProductService.prototype.postProducts = function (product) {
        var _this = this;
        console.log("Test_POST");
        //product.id=this._iterator;
        // product.id=ID.filter(product=>this.product=product.id)
        //product.id=this.getProducts()
        //  product.id=this._initId*100;
        //  this._initId=product.id+1;
        // console.log(this._initId);
        console.log(product);
        return this._http.post(this._productUrl + "/addproduct", product)
            .map(function (response) { response.json(); _this.getProducts(); })
            .catch(this.handleError);
    };
    ProductService.prototype.postCredentials = function (user) {
        console.log("Test_Login");
        console.log(user);
        return this._http.post(this._authenticationUrl, user)
            .map(function (response) { return response.json(); })
            .do(function (user) { return console.log('Add' + JSON.stringify(user)); })
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (id) {
        console.log("Deleting...");
        console.log(id);
        return this._http.delete(this._deleteProductUrl + "/" + id)
            .map(function (response) { return response.json(); })
            .do(function (id) { return console.log('Delete' + JSON.stringify(id)); })
            .catch(this.handleError);
    };
    ProductService.prototype.deleteAllProducts = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log("Deleting Product List...");
        return this._http.delete(this._productUrl + "/deleteallproducts", options)
            .map(function (response) { return console.log(response); })
            .catch(this.handleError);
    };
    ProductService.prototype.updateProduct = function (product) {
        var bodyString = JSON.stringify(product);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, body: bodyString });
        return this._http.put(this._productUrl + "/updateproduct", product, options)
            .map(function (res) {
            if (res.status == 200) {
                res.json();
                console.log("The Product was updated successfully!");
            }
            else {
                console.log("The product wasn't updated.");
            }
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    //Handling Error methods always take as a parameter error:Response
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//--------------------------------------------------------------------------------------------
//   deleteProduct(id:number):Observable<IProduct>{
//       console.log("Deleting...");
//       console.log(id);
//        return this._http.delete(`${this._deleteProductUrl+"/products"}/${id}`)
//       .map((response:Response)=>response.json())
//       .do(id=>console.log('Delete' + JSON.stringify(id)))
//       .catch(this.handleError);
//    }
//    deleteProduct(products:IProduct):Observable<IProduct>{
//        let body=JSON.stringify({
//              "content":{
//                   "available":products.available,
//                   "code":products.code,
//                   "id":products.id,
//                   "name":products.name,
//                   "price":products.price,
//                   "rating":products.rating
//                  }
//           // "content":{"products":products}          
//         });               
//-------------------------------------------------------------------------------------------------------
//         let headers=new Headers({
//            deletedproduct:products
//         //    "available":products.available,
//         //   "code":products.code,
//         //     "id":products.id,
//         //     "name":products.name,
//         //     "price":products.price,
//         //     "rating":products.rating
//         });
//     //        "available":products.available,
//     //        "code":products.code,
//     //        "id":products.id,
//     //        "name":products.name,
//     //        "price":products.price,
//     //        "rating":products.rating
//     //    });//{'Content-Type':'application/json'}
//        let options=new RequestOptions({
//            headers:headers,
//            body:body,
//           // url:this._deleteProductUrl+"/products"
//        });
//       console.log("Deleting...");
//       console.log("pr "+products);
//      // console.log(body);
//       console.log("opt "+options);
//       console.log(headers);
//      // return this._http.delete(`${this._deleteProductUrl}/${products}`,options)
//        return this._http.delete(this._deleteProductUrl+"/products",options)
//       .map((response:Response)=><IProduct>response.json())
//       .do(prducts=>console.log('Delete' + JSON.stringify(products)))
//       .catch(this.handleError);
//   } 
//# sourceMappingURL=product.service.js.map