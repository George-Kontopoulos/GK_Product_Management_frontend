import {Injectable,Component} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
// import {AddProductComponent} from './product-addproduct.component';
import {User} from '../users/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IProduct} from './product';

@Injectable()

export class ProductService{

//   private _id:number;
//   private _JsonArray=[this.getProducts()];
//   private _JsonObj=this._JsonArray.pop();
//   private _dato=this._JsonObj.subscribe(products=>this._id=products.id);

 //private _productUrl='api/products/products.json';
//private _initId=1;


private _productUrl='http://localhost:11212/api/products';

private _deleteProductUrl='http://localhost:11212/api/products/deleteproduct';

private _authenticationUrl="";

//We want Angular to provide us an instance of http client service,
//so we identify it as a dependency in the constructor
 constructor(private _http:Http){}

   requestConnection():Observable<Response>{

       return this._http.request(this._productUrl)
       .map((response:Response)=>{
                                     if(response.status!=200)
                                     {console.log('Something went wrong on the server')}
                                     else{console.log('Connected to server')}
                                 }) 
       .catch(this.handleError);
   }


    getProducts():Observable<IProduct>{

        return this._http.get(this._productUrl)
        .map((response:Response)=><IProduct>response.json())
        //Use .do for debugging,console log etc.
       // .do(data=>console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProductById(id:number):Observable<IProduct>
    {  
        
        let headers=new Headers({'Content-Type':'application/json'});
        let options=new RequestOptions({headers:headers});
        console.log("Retrieving product with id: "+id);

        return this._http.get(this._productUrl+"/getproduct/"+id,options)
        .map((response:Response)=>response.json())
        .share()
        .catch(this.handleError);

    }

   postProducts(product : IProduct):Observable<IProduct>{
       console.log("Test_POST");
        
      //product.id=this._iterator;
       // product.id=ID.filter(product=>this.product=product.id)
        //product.id=this.getProducts()
        //  product.id=this._initId*100;
        //  this._initId=product.id+1;
        // console.log(this._initId);

        console.log(product);
        

        return this._http.post(this._productUrl+"/addproduct",product)
   .map((response:Response)=>{<IProduct>response.json();this.getProducts();})
        // .do(product=>console.log('Add' + JSON.stringify(product)))
         .catch(this.handleError);
   }

   postCredentials(user :User):Observable<User>{
       console.log("Test_Login");
       console.log(user);

       return this._http.post(this._authenticationUrl,user)
       .map((response:Response)=><User>response.json())
       .do(user=>console.log('Add' + JSON.stringify(user)))
       .catch(this.handleError);  
    }
   

  deleteProduct(id:number):Observable<IProduct>{
      console.log("Deleting...");
           console.log(id);

            return this._http.delete(this._deleteProductUrl+"/"+id)
           .map((response:Response)=>response.json())
           .do(id=>console.log('Delete' + JSON.stringify(id)))
           .catch(this.handleError);
        }

  deleteAllProducts():Observable<IProduct>{
       let headers=new Headers({'Content-Type':'application/json'});
       let options=new RequestOptions({headers:headers});

      console.log("Deleting Product List...");

      return this._http.delete(this._productUrl+"/deleteallproducts",options)
      .map((response:Response)=> console.log(response))
      .catch(this.handleError);
  }

  updateProduct(product:IProduct){
      let bodyString=JSON.stringify(product);
      let headers=new Headers({'Content-Type':'application/json'});
      let options=new RequestOptions({headers:headers,body:bodyString})


      return this._http.put(this._productUrl+"/updateproduct",product,options)
      .map((res:Response)=>
                          {
                             if(res.status==200){ res.json(); console.log("The Product was updated successfully!");}
                             else{console.log("The product wasn't updated.");}
                          })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


    //Handling Error methods always take as a parameter error:Response
        private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
   
}

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