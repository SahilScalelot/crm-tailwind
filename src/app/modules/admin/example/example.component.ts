import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormBuilder } from '@angular/forms';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit{
    
    constructor(private _formBuilder: FormBuilder) {};

    ngOnInit(): void {}
    panelOpenState = false;

    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    firstFormGroup = this._formBuilder.group({
    firstCtrl: [''],
    });
    secondFormGroup = this._formBuilder.group({
        secondCtrl: [''],
    });
    isLinear = false;
    
    
}
