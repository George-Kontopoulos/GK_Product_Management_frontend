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
var product_service_1 = require("./product.service");
var star_component_1 = require("../shared/star.component");
var ProductListComponent = (function () {
    // testdata:Observable<Array<any>>;
    // testvalues:Array<any>=[];
    //  private anyErrors: boolean;
    // private finished: boolean;
    function ProductListComponent(_productService, _star) {
        this._productService = _productService;
        this._star = _star;
        // @Input()products: IProduct;
        this.pageTitle = 'Product List';
        this.showImage = false;
        this.imageWidth = 50;
        this.imageMargin = 2;
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    //TEST DATA function
    //Clear product list
    ProductListComponent.prototype.ClearList = function () {
        var _this = this;
        var useranswer = prompt("Are you sure you want to delete ALL the products???" + "\n" + "(Answer with yes or no.)");
        if (useranswer == "yes" || useranswer == "YES") {
            this._productService.deleteAllProducts()
                .subscribe(function (res) {
                _this.products = res;
                console.log(res);
            }),
                function () { return _this.loadproducts(); };
        }
    };
    //TEST DATA function
    // onProductDetail(product:number):IProduct
    // {
    //   return product;
    // }
    ProductListComponent.prototype.ngOnInit = function () {
        this.requestTestConnection();
        this.loadproducts();
        // console.log(this._JsonArray);
    };
    ProductListComponent.prototype.requestTestConnection = function () {
        var _this = this;
        this._productService.requestConnection()
            .subscribe(function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.loadproducts = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List' + message;
        //this._star.rating=this.products.rating;
        //this._star.starWidth=this.products.rating*122/7;
    };
    ProductListComponent.prototype.onItemDelete = function (products) {
        var _this = this;
        var userconfirm = confirm("The product will be deleted!");
        if (userconfirm) {
            this._productService.deleteProduct(products.id)
                .subscribe(function (res) {
                _this.products = res;
                console.log(res);
                _this.loadproducts();
            });
        }
    };
    return ProductListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProductListComponent.prototype, "listId", void 0);
ProductListComponent = __decorate([
    core_1.Component({
        // selector:'pm-products',
        //Using module.Id in order to use relative paths instead of absolute paths.
        //In cmd we are still receiving the absolute path.
        moduleId: module.id,
        templateUrl: 'product-list.component.html',
        styleUrls: ['product-list.component.css'],
        outputs: ['products'],
        providers: [star_component_1.StarComponent]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, star_component_1.StarComponent])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
// ngOnChanges(changes: any):void{
//   changes['products'];
//   //changes.currentValue=this.loadproducts();
//  // this.loadproducts();
// }
// ngOnChanges(changes:any){
//   //Listen to the list emitted event so as populate the model
//   //with the event payload
//   EmitterService.get(this.listId).subscribe((products:IProduct[])=>{this.loadproducts()})
// }
// onItemDelete(id:number){
//    this._productService.deleteProduct(id).subscribe(
//      products=>{
//         //Emit list event
//         EmitterService.get(this.products.id).emit(products);
//      },
//      err=>{
//        //Log errors if any
//        console.log(err);
//      });
// }
// {
//     "productId": 1,
//     "productName": "Leaf Rake",
//     "productCode": "GDN-0011",
//     "releaseDate": "March 19, 2016",
//     "description": "Leaf rake with 48-inch wooden handle.",
//     "price": 19.95,
//     "starRating": 3.2,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
// },
// {
//     "productId": 2,
//     "productName": "Garden Cart",
//     "productCode": "GDN-0023",
//     "releaseDate": "March 18, 2016",
//     "description": "15 gallon capacity rolling garden cart",
//     "price": 32.99,
//     "starRating": 4.2,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
// },
// {
//     "productId": 5,
//     "productName": "Hammer",
//     "productCode": "TBX-0048",
//     "releaseDate": "May 21, 2016",
//     "description": "Curved claw steel hammer",
//     "price": 8.9,
//     "starRating": 4.8,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
// },
// {
//     "productId": 8,
//     "productName": "Saw",
//     "productCode": "TBX-0022",
//     "releaseDate": "May 15, 2016",
//     "description": "15-inch steel blade hand saw",
//     "price": 11.55,
//     "starRating": 3.7,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
// },
// {
//     "productId": 10,
//     "productName": "Video Game Controller",
//     "productCode": "GMG-0042",
//     "releaseDate": "October 15, 2015",
//     "description": "Standard two-button video game controller",
//     "price": 35.95,
//     "starRating": 4.6,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
// }
// {
//     "productId": 1,
//     "productName": "Leaf Rake",
//     "productCode": "GDN-0011",
//     "releaseDate": "March 19, 2016",
//     "description": "Leaf rake with 48-inch wooden handle.",
//     "price": 19.95,
//     "starRating": 3.2,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
// },
// {
//     "productId": 2,
//     "productName": "Garden Cart",
//     "productCode": "GDN-0023",
//     "releaseDate": "March 18, 2016",
//     "description": "15 gallon capacity rolling garden cart",
//     "price": 32.99,
//     "starRating": 4.2,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
// },
// {
//     "productId": 5,
//     "productName": "Hammer",
//     "productCode": "TBX-0048",
//     "releaseDate": "May 21, 2016",
//     "description": "Curved claw steel hammer",
//     "price": 8.9,
//     "starRating": 4.8,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
// },
// {
//     "productId": 8,
//     "productName": "Saw",
//     "productCode": "TBX-0022",
//     "releaseDate": "May 15, 2016",
//     "description": "15-inch steel blade hand saw",
//     "price": 11.55,
//     "starRating": 3.7,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
// },
// {
//     "productId": 10,
//     "productName": "Video Game Controller",
//     "productCode": "GMG-0042",
//     "releaseDate": "October 15, 2015",
//     "description": "Standard two-button video game controller",
//     "price": 35.95,
//     "starRating": 4.6,
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
// }
//  do
//  {
//    this.products.id=this._id;
//    this._productService.deleteProduct( this.products.id);
//    console.log(this._id);
//   //  this._JsonObj=this._JsonArray.pop();
//   //  this._JsonObj.subscribe(products=>this._id=this.products.id);
//  }
//   while(false);//this._JsonArray.length>0
// this.testdata = new Observable<Array<number>>(observer => {
//       setTimeout(() => {
//           observer.next(42);
//       }, 1000);
//       setTimeout(() => {
//           observer.next(43);
//       }, 2000);
//       setTimeout(() => {
//           observer.complete();
//       }, 3000);
//   });
//   let subscription = this.testdata.subscribe(
//       value => this.testvalues.push(value),
//       error => this.anyErrors = true,
//       () => this.finished = true
//   );
// alert("Test Data"); 
//# sourceMappingURL=product-list.component.js.map