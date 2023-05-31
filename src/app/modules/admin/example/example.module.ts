import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from './example.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProposalAddItemsComponent } from './proposal-add-items/proposal-add-items.component';
import { BillAddComponent } from './bill-add/bill-add.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { MatDialogModule } from '@angular/material/dialog';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        ProposalAddItemsComponent,
        BillAddComponent, 
        AddPaymentComponent,               
        // BillAddComponent,
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        CommonModule,
        MatIconModule,
        MatDatepickerModule,
        MatRadioModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatDividerModule,
        MatMenuModule,
        MatMomentDateModule,
        FuseHighlightModule,
        SharedModule,
        MatTabsModule,
        MatCheckboxModule,
        MatDialogModule,
        FuseScrollbarModule,
        FuseScrollResetModule,
    ]
})
export class ExampleModule { }
