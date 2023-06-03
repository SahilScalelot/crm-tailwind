import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProposalAddItemsComponent } from './proposal-add-items/proposal-add-items.component';
import { BillAddComponent } from './bill-add/bill-add.component';
import { fuseAnimations } from '@fuse/animations';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { NewcontractComponent } from './new-contract/new-contract.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { AddNewLeadComponent } from './add-new-lead/add-new-lead.component';

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

    itemGroupPop(): void {
        const dialogRef = this._matDialog.open(ItemGroupComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    newContractPop(): void {
        const dialogRef = this._matDialog.open(NewcontractComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    addTaskPop(): void {
        const dialogRef = this._matDialog.open(AddNewTaskComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    newservicePop(): void {
        const dialogRef = this._matDialog.open(NewServiceComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }

    aadNewLeadPop(): void {
        const dialogRef = this._matDialog.open(AddNewLeadComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
}
