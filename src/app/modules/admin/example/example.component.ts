import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit{
    
    constructor(){}

    ngOnInit(): void {}

    closeButton(){

    }
    toggleButton(){
        // this.toggle=true;
    }
}
