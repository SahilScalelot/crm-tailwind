import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-payment-modes',
  templateUrl: './add-new-payment-modes.component.html',
})
export class AddNewPaymentModesComponent implements OnInit {

  composeForm: UntypedFormGroup;
  copyFields: { cc: boolean; bcc: boolean } = {
      cc : false,
      bcc: false
  };

  quillModules: any = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{align: []}, {list: 'ordered'}, {list: 'bullet'}],
      ['clean']
    ]
  };

constructor(
  public matDialogRef: MatDialogRef<AddNewPaymentModesComponent>,
  private _formBuilder: UntypedFormBuilder
) { }

ngOnInit(): void {
  // Create the form
  this.composeForm = this._formBuilder.group({
    to     : ['', [Validators.required, Validators.email]],
    cc     : ['', [Validators.email]],
    bcc    : ['', [Validators.email]],
    subject: [''],
    body   : ['', [Validators.required]]
});
}

  /**
   * Save and close
   */
  close(): void
  {
      // Close the dialog
      this.matDialogRef.close();
  }

}