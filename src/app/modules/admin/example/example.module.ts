import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabLabel, MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from './example.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
import { EditSourcesComponent } from './Dailog/edit-sources/edit-sources.component';
import { NewSourcesComponent } from './Dailog/new-sources/new-sources.component';
import { NewDepartmentComponent } from './Dailog/new-department/new-department.component';
import { PredefinedRepliesComponent } from './Dailog/predefined-replies/predefined-replies.component';
import { NewPriorityComponent } from './Dailog/new-priority/new-priority.component';
import { EditPriorityComponent } from './Dailog/edit-priority/edit-priority.component';
import { NewTicketStatusComponent } from './Dailog/new-ticket-status/new-ticket-status.component';
import { NewServiceComponent } from './Dailog/new-service/new-service.component';
import { NewCustomersGroupComponent } from './Dailog/new-customers-group/new-customers-group.component';


const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        PurposesOfConsentComponent,
        EditStatusComponent,
        AddNewPaymentModesComponent,
        EditPaymentModesComponent,
        NewCategoryComponent,
        NewCurrencyComponent,
        EditCurrencyComponent,
        NewTaxComponent,
        NewContractTypeComponent,
        NewStatusComponent,
        NewCustomeFieldComponent,
        NewWebleadFormComponent,
        NewSpamFilterComponent,
        NewLeadStatusComponent,
        EditLeadStatusComponent,
        NewSourcesComponent,
        EditSourcesComponent,
        NewDepartmentComponent,
        PredefinedRepliesComponent,
        NewPriorityComponent,
        EditPriorityComponent,
        NewTicketStatusComponent,
        NewServiceComponent,
        NewCustomersGroupComponent,
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatRadioModule,
        MatChipsModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatSelectModule,
        MatTabsModule,
        MatCheckboxModule,
        MatButtonModule,
        MatExpansionModule,
        MatButtonModule,
        MatTooltipModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSlideToggleModule,
    ]
})
export class ExampleModule{}
