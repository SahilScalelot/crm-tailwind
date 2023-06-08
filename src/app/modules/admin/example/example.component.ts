import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit{
    
    ngOnInit(): void {}
    panelOpenState = false;

    step = 0;

    setStep(index: number) {
        this.step = index;
    }
    
}
