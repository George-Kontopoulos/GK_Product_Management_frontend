import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
     moduleId:module.id,
     templateUrl: 'contact.component.html',
     styleUrls:['contact.component.css']
    // providers:[ProductListComponent,StarComponent]
})

export class ContactComponent{
    pageTitle:string='Add Contact information';

constructor (private _router:Router){
}
onBack():void{
        this._router.navigate(['/welcome']);
    }
}
