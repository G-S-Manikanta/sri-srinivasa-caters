import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  formSubmitted = false;
  formError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      eventType: ['', Validators.required],
      eventDate: ['', Validators.required],
      guestCount: ['', [Validators.required, Validators.min(1)]],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      this.formSubmitted = true;
      this.formError = false;
      // In a real app, you would send the data to a server here
      this.contactForm.reset();
    } else {
      this.formError = true;
    }
  }
}
