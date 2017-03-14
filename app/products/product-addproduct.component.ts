import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
import {Observable} from 'rxjs/Observable';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms';
import {ProductService} from './product.service';
import {ProductListComponent} from './product-list.component';
import {StarComponent} from '../shared/star.component';
import {Router} from '@angular/router';


@Component({
     moduleId:module.id,
     templateUrl: 'product-addproduct.component.html',
     styleUrls:['product-addproduct.component.css'],
     providers:[ProductListComponent,StarComponent]
})

// @View({
// directives:[CORE_DIRECTIVES,FORM_DIRECTIVES],
// 

// })
export class AddProductComponent implements OnInit {
   public addForm:FormGroup;
    
   private pageTitle="Add a Product";

    ngOnInit() {

this.addForm=new FormGroup({
   name:new FormControl(),
   code:new FormControl(),
   available:new FormControl(),
   price:new FormControl(),
   rating:new FormControl()
});

//  this._productService.postProducts(this.product)
//   .subscribe(product => this.product=product);

}

 errormessage:string;
 product: IProduct;

constructor (private _productService:ProductService,public fb:FormBuilder,private _prodlstcomp:ProductListComponent,private _router:Router){
}


onSubmit(event:any):void{
    //this.product.Id=4;
     let userconfirm=confirm("The product will be added.Continue?");
     if(userconfirm){
    this._productService.postProducts(this.addForm.value)
    .subscribe(res=>
                        {
                            this.product=res
                            this._prodlstcomp.loadproducts()
                        });
          }              
}

onBack():void{
        this._router.navigate(['/products']);
    }

 
 }


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