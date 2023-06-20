import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-purposes-of-consent',
  templateUrl: './purposes-of-consent.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PurposesOfConsentComponent implements OnInit {

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
    public matDialogRef: MatDialogRef<PurposesOfConsentComponent>,
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
   *  @param name
   */
  showCopyField(name: string): void
    {
        // Return if the name is not one of the available names
        if ( name !== 'cc' && name !== 'bcc' )
        {
            return;
        }

        // Show the field
        this.copyFields[name] = true;
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
