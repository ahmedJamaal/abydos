import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactUs } from '@model/public-models/contact-us';
import { TranslateService } from '@ngx-translate/core';
import { ContactUsService } from '@service/shared/contact-us.service';
import { NotificationService } from '@service/shared/notifcation.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  form: FormGroup = this.fb.group({});
  isLoading: boolean = false;
  contactus!: ContactUs;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactUsService,
    private notificationService: NotificationService,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {

    this.form = this.fb.group({
      // accountType : [this.auth.getCurrentAccount()],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmitForms() {
    // !this.auth.isTokenExpired() ?  this.onAddContactPublic() : this.onAddContactAdmin();
    
  }

  onAddContactPublic() {

    this.contactService.createContactMessage(this.form.value).subscribe({
      next: (value: any) => {

        if (value.code == 200) {
          this.notificationService.SuccessNotification(this.translate.instant('Sent_Message_Successfully'));

        } else {
          
          
          this.notificationService.WaringNotification(
            this.translate.instant('code not 200')
          );
          this.isLoading = false;
        }
      },
      error: (err) => {
        
        
        this.notificationService.ErrorNotification(`${err.message}`);
        this.isLoading = false;
      },
      complete: () => {
        

        this.isLoading = false;
        this.form.reset();
      },
    });



  }
  onAddContactAdmin() {
    this.contactService.createContactAdmin(this.form.value).subscribe({
      next: (value: any) => {

        if (value.code == 200) {
          this.notificationService.SuccessNotification(this.translate.instant('Sent_Message_Successfully'));

        } else {
          
          
          this.notificationService.WaringNotification(
            this.translate.instant('code not 200')
          );
          this.isLoading = false;
        }
      },
      error: (err) => {
        
        
        this.notificationService.ErrorNotification(`${err.message}`);
        this.isLoading = false;
      },
      complete: () => {
        

        this.isLoading = false;
        this.form.reset();
      },
    });



  }
}

