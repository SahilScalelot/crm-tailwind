import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProposalAddItemsComponent } from './proposal-add-items/proposal-add-items.component';
import { BillAddComponent } from './bill-add/bill-add.component';
import { fuseAnimations } from '@fuse/animations';
import { AddPaymentComponent } from './add-payment/add-payment.component';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
    animations : fuseAnimations
})


export class ExampleComponent implements OnInit{
    
    constructor(
        private _matDialog: MatDialog,
    ){}

    ngOnInit(): void {}

    closeButton(){

    }
    toggleButton(){
        // this.toggle=true;
    }

    /**
     * Open compose dialog
     */
    proposalAddItemsPop(): void
    {
        // Open the dialog
        const dialogRef = this._matDialog.open(ProposalAddItemsComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }


    billAddPop(): void {
        const dialogRef = this._matDialog.open(BillAddComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    addPaymentPop(): void {
        const dialogRef = this._matDialog.open(AddPaymentComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    public show:boolean = false;
    togglequickview() {
        this.show = !this.show;
    } 
}
