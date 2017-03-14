import {Injectable,EventEmitter} from '@angular/core';

@Injectable()
export class EmitterService{
    //Event store
    private static _emitters:{[id:number]:EventEmitter<any>}={};

    //Set a new event in the store with a given ID as key

    static get(id:number):EventEmitter<any>{
        if(!this._emitters[id])
        {
            this._emitters[id]=new EventEmitter();
            return this._emitters[id];
        }
    }
}