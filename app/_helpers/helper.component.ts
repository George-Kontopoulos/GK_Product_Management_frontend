import { Component } from '@angular/core';

@Component({
   templateUrl: 'app/_helpers/helper.component.html'
})
export class HelperComponent {

    isEquivalent(a:Object, b:Object):boolean {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}


 duplicateObject(a:Object,b:Object):void{
     // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
     // duplicate valuesfor each property of two objects
       b[propName]=a[propName];
    }
 }


}