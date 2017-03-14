import {Component,OnInit,OnChanges,Input,Output,EventEmitter} from '@angular/core';
import {IProduct} from './product';
import {Observable} from 'rxjs/Observable';
import {ProductService} from './product.service';
import {EmitterService} from '../emitter.service';
import {StarComponent} from '../shared/star.component';


@Component({
  // selector:'pm-products',
   //Using module.Id in order to use relative paths instead of absolute paths.
   //In cmd we are still receiving the absolute path.
   moduleId:module.id,
   templateUrl: 'product-list.component.html',
   styleUrls:['product-list.component.css'],
   outputs:['products'],
   providers:[StarComponent]

   //The style path is relative to the index.html
  // styleUrls:['app/products/product-list.component.css']
})


export class ProductListComponent implements OnInit{
  
 //private _JsonArray=[this.loadproducts()];

  // private _id:number;
  // private _JsonArray=[this._productService.getProducts()];
  // private _JsonObj=this._JsonArray.pop();
  // private _dato=this._JsonObj.subscribe(products=>this._id=products.id);

   //@Output()

   @Input()listId:number;
  // @Input()products: IProduct;
  
  pageTitle: string='Product List';
  showImage:boolean=false;
  imageWidth=50;
  imageMargin=2;
  listFilter:string;
  errorMessage:string;
  products: IProduct;
  ProductsArray:IProduct[];
    
  // testdata:Observable<Array<any>>;
  // testvalues:Array<any>=[];
  //  private anyErrors: boolean;
  // private finished: boolean;

constructor (private _productService:ProductService,private _star:StarComponent){

}

toggleImage():void{

 this.showImage=!this.showImage;
}

//TEST DATA function
//Clear product list
ClearList():void{

let useranswer=prompt("Are you sure you want to delete ALL the products???"+"\n"+"(Answer with yes or no.)");

   if(useranswer=="yes" || useranswer=="YES"){
     this._productService.deleteAllProducts()
         .subscribe(res=>  
                 { 
                   this.products=res
                   console.log(res)
                  }),
                  ()=>this.loadproducts();
   }
}
//TEST DATA function
// onProductDetail(product:number):IProduct
// {
  
  
//   return product;
// }

ngOnInit():void{
   this.requestTestConnection();
   this.loadproducts();
 // console.log(this._JsonArray);
}

requestTestConnection():void{
  this._productService.requestConnection()
  .subscribe(error=>this.errorMessage=<any>error)
}

loadproducts():void{
  this._productService.getProducts()
  .subscribe(products => this.products=products,
             error => this.errorMessage=<any>error);
}


onRatingClicked(message:string):void{
    this.pageTitle='Product List'+message;
    //this._star.rating=this.products.rating;
    //this._star.starWidth=this.products.rating*122/7;

}


  onItemDelete(products:IProduct){
   
   let userconfirm=confirm("The product will be deleted!");

   if(userconfirm){
     this._productService.deleteProduct(products.id)
      .subscribe(res => 
       {
        this.products=res
        console.log(res)
        this.loadproducts()
      });
    }
}

}
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