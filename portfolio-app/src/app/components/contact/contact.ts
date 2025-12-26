import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;

  constructor(private translationService: TranslationService) {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  onSubmit() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    const templateParams = {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      message: this.contactForm.message,
    };

    emailjs
      .send(
        'YOUR_SERVICE_ID', // TODO: replace with actual EmailJS service ID
        'YOUR_TEMPLATE_ID', // TODO: replace with actual template ID
        templateParams,
        {
          publicKey: 'YOUR_PUBLIC_KEY', // TODO: replace with actual public key
        }
      )
      .then(() => {
        alert(this.translate('contact.success_message'));
        this.resetForm();
      })
      .catch(() => {
        alert(this.translate('contact.error_message'));
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }

  private resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      message: '',
    };
  }
}
