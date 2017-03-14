import {Component,OnInit,Input} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {Observable} from 'rxjs/Observable';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms';
import {HelperComponent} from '../_helpers/helper.component';

@Component({
 //Selector is required only if our component will be nested into an another component
   moduleId:module.id,
   templateUrl:'./product-detail.component.html',
   providers:[ProductService,HelperComponent]
})

export class ProductDetailComponent implements OnInit{
    
    //@Input() products: IProduct;
    public updateForm:FormGroup;
    public currentForm:FormGroup;
    currentId:number;
    pageTitle:string='Product ID';
    showForm:boolean=false;
    errorMessage:string;
    currentProduct:IProduct;
    product:IProduct;

    constructor(private _route:ActivatedRoute,
                private _router:Router,
                private _service:ProductService,
                private _helper:HelperComponent) {
                
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

    ngOnInit():void{

       let id = +this._route.snapshot.params['id'];
       this.pageTitle += `:${id}`;
       this.currentId=id;
       this._service.getProductById(id)
                    .subscribe(res=>this.product=res,
                               error => this.errorMessage=<any>error);


        this.updateForm=new FormGroup({
        id:new FormControl(),    
        name:new FormControl(),
        code:new FormControl(),
        available:new FormControl(),
        price:new FormControl(),
        rating:new FormControl()
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
    }

   onUpdate(event:any):void{
       if(this._helper.isEquivalent(this.currentProduct,this.product)){
       //this.product.id=this.currentId;
         alert("You haven't made any changes to the product...");
       }
       else{  
              this._service.updateProduct(this.product)
                           .subscribe(res=>this.product=res,
                                      error => this.errorMessage=<any>error);

               alert("The product was updated succesfully!!!");                       
            }
   }

    onSwitchForms():void{
        this.currentProduct = { ...this.currentProduct , ...this.product };
        this.showForm=!this.showForm;
    }
    
    
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

    onBack():void{
        this._router.navigate(['/products']);
    }

    onCancel():void{
        this.onSwitchForms();
        this._router.navigate(['product/'+this.currentId]);
    }
}