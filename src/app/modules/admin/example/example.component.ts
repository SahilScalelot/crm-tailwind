import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,UntypedFormGroup, FormBuilder, UntypedFormBuilder , ControlValueAccessor ,NG_VALUE_ACCESSOR} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PurposesOfConsentComponent } from './Dailog/purposes-of-consent/purposes-of-consent.component';
import { EditStatusComponent } from './Dailog/edit-status/edit-status.component';
import { AddNewPaymentModesComponent } from './Dailog/add-new-payment-modes/add-new-payment-modes.component';
import { EditPaymentModesComponent } from './Dailog/edit-payment-modes/edit-payment-modes.component';
import { NewCategoryComponent } from './Dailog/new-category/new-category.component';
import { NewCurrencyComponent } from './Dailog/new-currency/new-currency.component';
import { EditCurrencyComponent } from './Dailog/edit-currency/edit-currency.component';
import { NewTaxComponent } from './Dailog/new-tax/new-tax.component';
import { NewContractTypeComponent } from './Dailog/new-contract-type/new-contract-type.component';
import { NewStatusComponent } from './Dailog/new-status/new-status.component';
import { NewCustomeFieldComponent } from './Dailog/new-custome-field/new-custome-field.component';
import { NewWebleadFormComponent } from './Dailog/new-weblead-form/new-weblead-form.component';
import { NewSpamFilterComponent } from './Dailog/new-spam-filter/new-spam-filter.component';
import { NewLeadStatusComponent } from './Dailog/new-lead-status/new-lead-status.component';
import { EditLeadStatusComponent } from './Dailog/edit-lead-status/edit-lead-status.component';
import { NewSourcesComponent } from './Dailog/new-sources/new-sources.component';
import { EditSourcesComponent } from './Dailog/edit-sources/edit-sources.component';
import { NewDepartmentComponent } from './Dailog/new-department/new-department.component';
import { PredefinedRepliesComponent } from './Dailog/predefined-replies/predefined-replies.component';
import { NewPriorityComponent } from './Dailog/new-priority/new-priority.component';
import { EditPriorityComponent } from './Dailog/edit-priority/edit-priority.component';
import { NewTicketStatusComponent } from './Dailog/new-ticket-status/new-ticket-status.component';
import { NewServiceComponent } from './Dailog/new-service/new-service.component';
import { NewCustomersGroupComponent } from './Dailog/new-customers-group/new-customers-group.component';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: ExampleComponent,
        multi: true
    }]
})

export class ExampleComponent implements OnInit{
    
    constructor(
        private _formBuilder: FormBuilder,
        private _matDialog: MatDialog,
        private _productFormBuilder: UntypedFormBuilder,
        ) {};

    ngOnInit(): void {
        // Create the selected product form
        this.selectedProductForm = this._productFormBuilder.group({
            active : [false]
        });
    }
        
    panelOpenState = false;
    selectedProductForm: UntypedFormGroup;
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


    purposesOfConsent(): void
    {
       // Open the dialog
        const dialogRef = this._matDialog.open(PurposesOfConsentComponent);
        dialogRef.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    };
    EditStatus(): void
    {
       // Open the dialog
        const editStatusDialog = this._matDialog.open(EditStatusComponent);
        editStatusDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    AddNewPaymentsMOdes(): void
    {
       // Open the dialog
        const AddNewPaymentsMOdesDialog = this._matDialog.open(AddNewPaymentModesComponent);
        AddNewPaymentsMOdesDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    PaymentsMOdes(): void
    {
       // Open the dialog
        const PaymentsMOdesDialog = this._matDialog.open(EditPaymentModesComponent);
        PaymentsMOdesDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewCategory(): void
    {
       // Open the dialog
        const NewCategoryDialog = this._matDialog.open(NewCategoryComponent);
        NewCategoryDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewCurrency(): void
    {
       // Open the dialog
        const NewCurrencyDialog = this._matDialog.open(NewCurrencyComponent);
        NewCurrencyDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    EditCurrency(): void
    {
       // Open the dialog
        const EditCurrencyDialog = this._matDialog.open(EditCurrencyComponent);
        EditCurrencyDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewTax(): void
    {
       // Open the dialog
        const NewTaxDialog = this._matDialog.open(NewTaxComponent);
        NewTaxDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewContractType(): void
    {
       // Open the dialog
        const NewContractTypeDialog = this._matDialog.open(NewContractTypeComponent);
        NewContractTypeDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewStatus(): void
    {
       // Open the dialog
        const NewStatusDialog = this._matDialog.open(NewStatusComponent);
        NewStatusDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewCustomeField(): void
    {
       // Open the dialog
        const NewCustomeFieldDialog = this._matDialog.open(NewCustomeFieldComponent);
        NewCustomeFieldDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewWebleadForm(): void
    {
       // Open the dialog
        const NewWebleadFormDialog = this._matDialog.open(NewWebleadFormComponent);
        NewWebleadFormDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewSpamFilter(): void
    {
       // Open the dialog
        const NewSpamFilterDialog = this._matDialog.open(NewSpamFilterComponent);
        NewSpamFilterDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewLeadStatus(): void
    {
       // Open the dialog
        const NewLeadStatusDialog = this._matDialog.open(NewLeadStatusComponent);
        NewLeadStatusDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    EditLeadStatus(): void
    {
       // Open the dialog
        const EditLeadStatusDialog = this._matDialog.open(EditLeadStatusComponent);
        EditLeadStatusDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewSources(): void
    {
       // Open the dialog
        const NewSourcesDialog = this._matDialog.open(NewSourcesComponent);
        NewSourcesDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    EditSources(): void
    {
       // Open the dialog
        const EditSourcesDialog = this._matDialog.open(EditSourcesComponent);
        EditSourcesDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewDepartment(): void
    {
       // Open the dialog
        const NewDepartmentDialog = this._matDialog.open(NewDepartmentComponent);
        NewDepartmentDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    PreDefinedReplies(): void
    {
       // Open the dialog
        const PreDefinedRepliesDialog = this._matDialog.open(PredefinedRepliesComponent);
        PreDefinedRepliesDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewPriority(): void
    {
       // Open the dialog
        const NewPriorityDialog = this._matDialog.open(NewPriorityComponent);
        NewPriorityDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    EditPriority(): void
    {
       // Open the dialog
        const EditPriorityDialog = this._matDialog.open(EditPriorityComponent);
        EditPriorityDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewTicketStatus(): void
    {
       // Open the dialog
        const NewTicketStatusDialog = this._matDialog.open(NewTicketStatusComponent);
        NewTicketStatusDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewService(): void
    {
       // Open the dialog
        const NewServiceDialog = this._matDialog.open(NewServiceComponent);
        NewServiceDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
    NewCustomersGroup(): void
    {
       // Open the dialog
        const NewCustomersGroupDialog = this._matDialog.open(NewCustomersGroupComponent);
        NewCustomersGroupDialog.afterClosed().subscribe((result) => {
            console.log('Compose dialog was closed!');
        });
    }
}
